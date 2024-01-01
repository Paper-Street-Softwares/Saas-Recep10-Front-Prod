import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../css/main/adicionarvisita.css";
import inputstyle from "../../css/structure/input.css";
import SearchFilter from "../../functions/SearchFilter";
import { abrirDialog3, fecharDialog3 } from "../../functions/DialogController3";
import ExibirModal from "../../functions/ExibirModal";

function trocarButton() {
  const buttonNoAtt = document.getElementById("closeModalNoAtt");
  buttonNoAtt.style.display = "block";
  const buttonAtt = document.getElementById("closeModal");
  buttonAtt.style.display = "none";
}

const AdicionarVisita = ({ abrirDialog3 }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [visitDate, setVisitDate] = useState("");

  useEffect(() => {
    axios
      .get("https://recep10-back.up.railway.app/api/visitantes")
      .then((response) => {
        // Apenas para exemplo, não é necessário carregar visitantes aqui se o SearchFilter já os carrega
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  const handleUserClick = (userId, userName) => {
    setSelectedUser({ id: userId, name: userName });
  };

  const handleBackClick = (event) => {
    event.preventDefault(); // Evita a recarga da página
    fecharDialog3();
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setVisitDate(date);
  };

  const handleAddVisit = async (event) => {
    try {
      event.preventDefault();
      if (visitDate.length === 0) {
        trocarButton();
        alert("Preencha a data corretamente.");
        return;
      }

      if (visitDate.length !== 10) {
        trocarButton();
        alert("Uma data deve conter no mínimo 10 caracteres");
        return;
      }

      if (!selectedUser || !visitDate) {
        trocarButton();
        alert("Verifique se a data e o visitante estão selecionados.");
        return;
      }

      // Verificar se a data é no futuro
      const currentDate = new Date().toISOString().split("T")[0];
      if (visitDate > currentDate) {
        trocarButton();
        alert("Não é possível adicionar visitas em datas futuras.");
        return;
      }

      // Carregar as visitas antes de verificar se o usuário já possui uma visita na data especificada
      const response = await axios.get(
        "https://recep10-back.up.railway.app/api/visitas"
      );
      const visits = response.data;

      // Verificar se o usuário já possui uma visita na data especificada
      const hasVisitOnDate = visits.some((visitor) => {
        return (
          visitor.visitanteId === selectedUser.id &&
          visitor.visitDate === visitDate
        );
      });

      if (hasVisitOnDate) {
        trocarButton();
        alert("Ja existe uma data cadastrada para este visitante neste dia.");
        return;
      }

      // Continuar com a lógica de adicionar visita se o usuário não tiver visita na data
      const visitData = {
        visitDate,
        visitanteId: selectedUser.id,
      };

      await axios.post(
        "https://recep10-back.up.railway.app/api/visitas",
        visitData
      );
      trocarButton();
      
      alert("Visita adicionada com sucesso ao visitante " + selectedUser.name);}
      catch (error) {
      trocarButton();
      console.error("Erro ao realizar operações:", error);
      alert("Ja existe uma visita cadastrada neste dia no visitante " +selectedUser.name);

    }
  };

  return (
    <div className="main-AdicionarVisita">
      <div className="title-AdicionarVisita">
        <p className="titles-Global">Adicionar visita a um visitante</p>
        <p className="text-Home">
          Passo 1. Preencha o campo "Data" com o dia que deseja adicionar a
          visita.
        </p>
        <p className="text-Home">
          Passo 2. Clique no campo "Pesquisar visitante" e após digitar o nome,
          selecione o visitante que deseja adicionar. Após isso, só clicar no
          botão e aguardar.
        </p>
        <p className="titles-Global">Data</p>
      </div>
      <div className="form-AdicionarVisita">
        <form className="inputsForm-AdicionarVisita">
          <input
            className="inputs-Global"
            placeholder="Insira a data"
            type="date"
            onChange={handleDateChange}
          ></input>
          <SearchFilter onUserClick={handleUserClick} />
          <div className="buttonGroup">
            <button onClick={handleAddVisit} className="button-Global">
              ADICIONAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdicionarVisita;
