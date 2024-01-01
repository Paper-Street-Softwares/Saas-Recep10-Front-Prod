import React, { useEffect, useState } from "react";
import axios from "axios";
import anime from "animejs";
import SearchFilterUpdate from "../../functions/SearchFilterUpdate";
import { updateUser } from "../../functions/updateUser";
import { deleteUser } from "../../functions/deleteUser";
import "../../css/Visitantes.module.css"
import "../../css/structure/input.css";

import AlterarVisitanteTemplate from "./AlterarVisitanteTemplate";
import ExibirModal from "../../functions/ExibirModal";

function showDeleteModal(){
  const pegarModal = document.getElementById('removervisitor');
  pegarModal.showModal();
}

const AlterarVisitante = () => {
  const baseUrl = "https://recep10-back.up.railway.app";
  const [visitor, setVisitor] = useState([]);
  const [dialogAtiva, setDialogAtiva] = useState(false);
  const [visitanteSelecionado, setVisitanteSelecionado] = useState(null);

  const handleDeleteUser = async (event) => {

    var resultado = window.confirm("Deseja realmente apagar o visitante?");

    if(resultado){
      try {
        const id = visitor.id;
        if (!id) {
          console.error("ID do visitante não encontrado.");
          return;
        }
        await deleteUser(id);
        alert("Usuário apagado com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
  
    };
    }


  const handleUpdateUser = async () => {
    const id = visitor.id;
    if (!id) {
      console.error("ID do visitante não encontrado.");
      return;
    }
    try {
      await updateUser(id);
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
    const pegarQuadro = document.getElementById("quadro");
    const pegarQuadro2 = document.getElementById("quadro2");
    pegarQuadro.style.display = "none";
    pegarQuadro.disabled = true;
    pegarQuadro2.style.display = "block";

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
    <AlterarVisitanteTemplate
      visitor={visitor}
      baseUrl={baseUrl}
      handleDeleteUser={handleDeleteUser}
      handleUpdateUser={handleUpdateUser}
      habilitarInput={habilitarInput}
      handleClick={handleClick}
      dialogAtiva={dialogAtiva}
      showDeleteModal={showDeleteModal}
    />
  );
};

export default AlterarVisitante;
