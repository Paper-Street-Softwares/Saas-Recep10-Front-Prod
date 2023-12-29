import style2 from "../../css/Visitantes.module.css";
import SearchFilterUpdate from "../../functions/SearchFilterUpdate";
import { abrirDialog4, fecharDialog4 } from "../../functions/DialogController4";
import axios from "axios";
import { useEffect, useState } from "react";
import anime from "animejs";
import { updateUser } from "../../functions/updateUser";
import { deleteUser } from "../../functions/deleteUser";
import style from "../../css/main/alterarvisitante.css";
import inputstyle from "../../css/structure/input.css";

const AlterarVisitante = () => {
  const baseUrl = "https://recep10-back.up.railway.app";
  const [visitor, setVisitor] = useState([]);
  const [dialogAtiva, setDialogAtiva] = useState(false);
  const [visitanteSelecionado, setVisitanteSelecionado] = useState(null);
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

  return (
    <div className="main-AlterarVisitante">
      <div className="title-AlterarVisitante">
        <p className="titles-Global" id="vt1">
          Visitantes
        </p>
      </div>
      <div className="form-AlterarVisitante">
        <form id="att">
          <div id="quadro">
            <SearchFilterUpdate onUserClick={handleClick} />
          </div>
        </form>
        <div
          id="quadro2"
          className={`${style2.quadro2} ${dialogAtiva ? style2.active : ""}`}
        >
          <p id="vt2" className="titles-Global">
            Editar Dados
          </p>
          <div id="infos" className="painelUpdate-AlterarVisitante">
            <input
              className="inputs-Global"
              id="nomeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.name}
              placeholder="Nome"
            />
            <input
              className="inputs-Global"
              id="telefoneUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.phone}
              placeholder="Telefone"
            />
            <select
              className="inputs-Global"
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
            <input
              className="inputs-Global"
              id="idadeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.age}
              placeholder="Idade"
            />
            <input
              className="inputs-Global"
              id="enderecoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.address}
              placeholder="Endereço"
            />
            <input
              className="inputs-Global"
              id="cidadeUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.cityAndState}
              placeholder="Cidade e Estado"
            />
            <input
              className="inputs-Global"
              id="religiaoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.religion}
              placeholder="Religião"
            />
            <input
              className="inputs-Global"
              id="grupoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.smallGroup}
              placeholder="Pequeno Grupo"
            />
            <input
              className="inputs-Global"
              id="estudoUpdate"
              maxLength={53}
              type="text"
              disabled
              defaultValue={visitor.bibleStudy}
              placeholder="Estudo Bíblico"
            />
          </div>
          <div className="buttonGroup-AlterarVisitante">
            <button
              className="buttonAtt-Global"
              id="edit"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={(event) => habilitarInput(event)}
            >
              EDITAR DADOS
            </button>
            <button
              className="buttonBack-Global"
              id="del"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={handleDeleteUser}
            >
              APAGAR
            </button>
            <button
              className="button-Global"
              id="upuser"
              style={{ pointerEvents: "none", opacity: "50%" }}
              onClick={handleUpdateUser}
            >
              ATUALIZAR
            </button>
          </div>
        </div>
      </div>
    </div>
    // <dialog id="dialog4" className={style2.visitantes}>
    //   <form id="att">
    //     <h1 id="vt1">Visitantes</h1>
    //     <div id="quadro" className={style2.quadro}>
    //       <SearchFilterUpdate onUserClick={handleClick} />
    //     </div>
    //     <div
    //       id="quadro2"
    //       className={`${style2.quadro2} ${dialogAtiva ? style2.active : ""}`}
    //     >
    //       <h2 id="vt2" className={style2.visitante2}></h2>
    //       <div id="infos" className={style2.infos}>
    //         <label>
    //           Nome:{" "}
    //           <input
    //             id="nomeUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.name}
    //           />
    //         </label>
    //         <label>
    //           Telefone:{" "}
    //           <input
    //             id="telefoneUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.phone}
    //           />
    //         </label>
    //         <label>
    //           Gênero:{" "}
    //           <select
    //             id="generoUpdate"
    //             defaultValue=""
    //             style={{ pointerEvents: "none", opacity: "50%" }}
    //           >
    //             <option value="" disabled>
    //               Gênero
    //             </option>
    //             <option>Masculino</option>
    //             <option>Feminino</option>
    //           </select>
    //         </label>
    //         <label>
    //           Idade:{" "}
    //           <input
    //             id="idadeUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.age}
    //           />
    //         </label>
    //         <label>
    //           Endereço:{" "}
    //           <input
    //             id="enderecoUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.address}
    //           />
    //         </label>
    //         <label>
    //           Cidade e Estado:{" "}
    //           <input
    //             id="cidadeUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.cityAndState}
    //           />
    //         </label>
    //         <label>
    //           Religião:{" "}
    //           <input
    //             id="religiaoUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.religion}
    //           />
    //         </label>
    //         <label>
    //           Pequeno Grupo:{" "}
    //           <input
    //             id="grupoUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.smallGroup}
    //           />
    //         </label>
    //         <label>
    //           Estudo Bíblico:{" "}
    //           <input
    //             id="estudoUpdate"
    //             maxLength={53}
    //             type="text"
    //             disabled
    //             defaultValue={visitor.bibleStudy}
    //           />
    //         </label>
    //       </div>
    //       <button
    //         className={style2.btnalt}
    //         id="edit"
    //         style={{ pointerEvents: "none", opacity: "50%" }}
    //         onClick={(event) => habilitarInput(event)}
    //       >
    //         EDITAR DADOS
    //       </button>
    //       <button
    //         className={style2.btnexc}
    //         id="del"
    //         style={{ pointerEvents: "none", opacity: "50%" }}
    //         onClick={handleDeleteUser}
    //       >
    //         APAGAR
    //       </button>
    //       <button
    //         className={style2.btnatt}
    //         id="upuser"
    //         style={{ pointerEvents: "none", opacity: "50%" }}
    //         onClick={handleUpdateUser}
    //       >
    //         ATUALIZAR
    //       </button>
    //     </div>
    //   </form>
    //   <img onClick={fecharDialog4} alt="close2" className={style2.fechar}></img>
    // </dialog>
  );
};

export default AlterarVisitante;
