import style from "../css/Painel.module.css";
import style2 from "../css/Visitantes.module.css";
import { abrirDialog, fecharDialog } from "../functions/DialogController";
import {
  abrirDialog2,
  enviarVisitante,
  fecharDialog2,
} from "../functions/DialogController2";
import { abrirDialog3, fecharDialog3 } from "../functions/DialogController3";
import { abrirDialog4, fecharDialog4 } from "../functions/DialogController4";
import { useEffect, useState } from "react";
import axios from "axios";
import exit from "../images/exit.png";
import resgistervisit from "../images/registervisit.png";
import resgistervisitor from "../images/registervisitor.png";
import visits from "../images/visits.png";
import visitorsmg from "../images/visitors.png";
import training from "../images/training.png";
import anime from "animejs";
import { updateUser } from "../functions/updateUser";
import { deleteUser } from "../functions/deleteUser";

import AdicionarVisita from "../components/main/AdicionarVisita";
import Relatorio from "../functions/Relatorio";
import SearchFilterUpdate from "../functions/SearchFilterUpdate";

// REFATORAÇÃO DO CÓDIGO
import Navbar from "../components/structure/Navbar";
import CadastrarVisitante from "../components/main/CadastrarVisitante";
import AlterarVisitante from "../components/main/AlterarVisitante";

function Painel() {
  /*Não mover o baseUrl pra baixo*/
  const baseUrl = "https://recep10-back.up.railway.app";

  const [dataHoraAtual, setDataHoraAtual] = useState(new Date());

  const [dialogAtiva, setDialogAtiva] = useState(false);
  const [visitanteSelecionado, setVisitanteSelecionado] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataHoraAtual(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formatarData = (data) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return data.toLocaleDateString(undefined, options);
  };

  const formatarHora = (data) => {
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return data.toLocaleTimeString(undefined, options);
  };

  //MÉTODO PARA REQUISITAR TODOS OS VISITANTES

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/visitantes`)
      .then((response) => {
        setVisitors(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  const [visitors, setVisitors] = useState([]);

  //MÉTODO PARA REQUISITAR UM USUÁRIO POR ID

  const handleClick = (itemId) => {
    // Adicione o itemId ao final do endpoint da API
    const pegarQuadro = document.getElementById("quadro");
    const pegarQuadro2 = document.getElementById("quadro2");
    pegarQuadro.style.visibility = "hidden";
    pegarQuadro.disabled = true;
    pegarQuadro2.style.visibility = "visible";

    axios
      .get(`${baseUrl}/api/visitantes/${itemId}`)
      .then((response) => {
        setVisitor(response.data);
        setVisitanteSelecionado(itemId);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });

    const quadroVisitante = document.getElementById("quadro2");
    const ativarEdicao = document.getElementById("edit");
    const delDados = document.getElementById("del");

    ativarEdicao.style.pointerEvents = "auto";
    ativarEdicao.style.cursor = "pointer";

    delDados.style.opacity = "1";
    delDados.style.pointerEvents = "auto";
    delDados.style.cursor = "pointer";

    anime({
      targets: [ativarEdicao, quadroVisitante],
      duration: 10,
      easing: "linear",
      opacity: 1,
    });
  };

  const [visitor, setVisitor] = useState([]);

  //MÉTODO PARA DELETAR USUÁRIO
  const handleDeleteUser = async (event) => {
    event.preventDefault();

    const resultado = window.confirm(
      "Deseja realmente apagar o visitante " +
        visitor.name +
        "? Se fizer isto, as visitas deste visitante também serão apagadas."
    );
    if (resultado) {
      try {
        const id = visitor.id; // Supondo que visitor tenha uma propriedade id

        if (!id) {
          console.error("ID do visitante não encontrado.");
          return;
        }

        await deleteUser(id);
        // Adicione aqui a lógica desejada após a exclusão do usuário, se necessário
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
      window.location.reload();
    }
  };

  const handleUpdateUser = async (event) => {
    event.preventDefault();

    const id = visitor.id; // Supondo que visitor tenha uma propriedade id

    if (!id) {
      console.error("ID do visitante não encontrado.");
      return;
    }

    try {
      await updateUser(id);
      // Adicione aqui a lógica desejada após a atualização do usuário, se necessário
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const habilitarInput = (event) => {
    event.preventDefault();
    const infosDiv = document.getElementById("infos");
    const inputs = infosDiv.querySelectorAll("input");
    const attDados = document.getElementById("upuser");
    const gend = document.getElementById("generoUpdate");
    const d4 = document.getElementById("quadro");
    const d5 = document.getElementById("quadro2");
    const vt1 = document.getElementById("vt1");
    const vt2 = document.getElementById("vt2");

    gend.style.opacity = "1";
    gend.style.pointerEvents = "auto";

    attDados.style.opacity = "1";
    attDados.style.pointerEvents = "auto";
    attDados.style.cursor = "pointer";

    vt1.style.opacity = "1";
    vt1.style.transition = "0.5s";
    vt1.style.opacity = "0";

    vt2.innerHTML = "Editar Dados";

    d4.style.opacity = "1";
    d4.style.transition = "0.5s";
    d4.style.opacity = "0";
    d4.style.pointerEvents = "none";

    anime({
      targets: d5,
      duration: 200,
      easing: "linear",
      left: 0,
    });

    anime({
      targets: vt2,
      duration: 200,
      easing: "linear",
      left: 0,
    });

    for (const input of inputs) {
      input.disabled = false;
    }
  };

  useEffect(() => {
    console.log(visitor); // Isso será executado sempre que visitor mudar
  }, [visitor]);

  return (
    // <div className="body-Painel">
    //   <div className="header-Painel"></div>

    //   <div className="main-Painel">
    //     <div className="top-Section-Painel">

    //     </div>
    //     <div className="mid-Section-Painel">

    //     </div>
    //     <div className="bot-Section-Painel">

    //     </div>
    //   </div>

    //   <div className="footer-Painel"></div>
    // </div>

    <div className={style.content}>
      <div className={style.dashboard}>
        <Relatorio onUserClick={handleClick} />
      </div>
      <div className={style.horizon} />

      <CadastrarVisitante />

      {/* Acima abre o REGISTRO DE VISITANTES e Abaixo ADICIONA VISITAS aos visitantes */}

      <AdicionarVisita />

      {/* Abaixo Busca os VISITANTES */}

      <AlterarVisitante />

      {/* <dialog id="dialog4" className={style2.visitantes}>
        <form id="att">
          <h1 id="vt1">Visitantes</h1>
          <div id="quadro" className={style2.quadro}>
            <SearchFilterUpdate onUserClick={handleClick} />
          </div>
          <div
            id="quadro2"
            className={`${style2.quadro2} ${dialogAtiva ? style2.active : ""}`}
          >
            <h2 id="vt2" className={style2.visitante2}></h2>
            <div id="infos" className={style2.infos}>
              <label>
                Nome:{" "}
                <input
                  id="nomeUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.name}
                />
              </label>
              <label>
                Telefone:{" "}
                <input
                  id="telefoneUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.phone}
                />
              </label>
              <label>
                Gênero:{" "}
                <select
                  id="generoUpdate"
                  defaultValue=""
                  style={{ pointerEvents: "none", opacity: "50%" }}
                >
                  <option value="" disabled>
                    Gênero
                  </option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
              </label>
              <label>
                Idade:{" "}
                <input
                  id="idadeUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.age}
                />
              </label>
              <label>
                Endereço:{" "}
                <input
                  id="enderecoUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.address}
                />
              </label>
              <label>
                Cidade e Estado:{" "}
                <input
                  id="cidadeUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.cityAndState}
                />
              </label>
              <label>
                Religião:{" "}
                <input
                  id="religiaoUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.religion}
                />
              </label>
              <label>
                Pequeno Grupo:{" "}
                <input
                  id="grupoUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.smallGroup}
                />
              </label>
              <label>
                Estudo Bíblico:{" "}
                <input
                  id="estudoUpdate"
                  maxLength={53}
                  type="text"
                  disabled
                  defaultValue={visitor.bibleStudy}
                />
              </label>
            </div>
            <button
              className={style2.btnalt}
              id="edit"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={(event) => habilitarInput(event)}
            >
              EDITAR DADOS
            </button>
            <button
              className={style2.btnexc}
              id="del"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={handleDeleteUser}
            >
              APAGAR
            </button>
            <button
              className={style2.btnatt}
              id="upuser"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={handleUpdateUser}
            >
              ATUALIZAR
            </button>
          </div>
        </form>
        <img
          onClick={fecharDialog4}
          alt="close2"
          className={style2.fechar}
          src={exit}
        ></img>
      </dialog> */}
      <div className={style.body}>
        <h1>SEJA BEM-VINDO</h1>
        <h2>
          Hoje é {formatarData(dataHoraAtual)} - {formatarHora(dataHoraAtual)}
        </h2>
      </div>
      <Navbar />
    </div>
  );
}

export default Painel;
