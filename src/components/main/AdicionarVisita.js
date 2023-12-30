import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../css/main/adicionarvisita.css";
import inputstyle from "../../css/structure/input.css";
import SearchFilter from "../../functions/SearchFilter";
import { abrirDialog3, fecharDialog3 } from "../../functions/DialogController3";

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
    console.log("ID do usuário clicado:", userId);
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
    event.preventDefault();
    try {
      event.preventDefault();
      if (!selectedUser || !visitDate) {
        event.preventDefault();
        const successModall = document.getElementById("genericModal");
        const msgModall = document.getElementById("msgmodal");
        msgModall.innerHTML =
          "Verifique se a data e o visitante estão selecionados.";
        successModall.showModal();
        return;
        event.preventDefault();
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
        window.alert("Já existe uma visita neste dia, selecione outra data.");
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

      const successModall = document.getElementById("genericModal");
      const msgModall = document.getElementById("msgmodal");
      msgModall.innerHTML =
        "Visita adicionada com sucesso ao visitante " + selectedUser.name;
      successModall.showModal();
    } catch (error) {
      event.preventDefault();
      console.error("Erro ao realizar operações:", error);
      const badModall = document.getElementById("genericModal");
      const msgModall = document.getElementById("msgmodal");
      msgModall.innerHTML =
        "Ja existe uma visita cadastrada neste dia no visitante " +
        selectedUser.name;
      badModall.showModal();
    }
  };

  return (
    <div className="main-AdicionarVisita">
      <div className="title-AdicionarVisita">
        <p className="titles-Global">Adicionar Visita</p>
      </div>
      <div className="form-AdicionarVisita">
        <form className="inputsForm-AdicionarVisita">
          <input
            className="date-Global"
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
