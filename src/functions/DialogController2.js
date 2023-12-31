import { useState } from "react";
import ExibirModal from '../functions/ExibirModal'

function abrirDialog2() {
  const dialog = document.getElementById("dialog2");
  dialog.showModal();
}

function fecharModal() {
  const genericModall = document.getElementById('genericModal');
  genericModall.close();
}

async function enviarVisitante(event) {
  const verificaGenero = document.getElementById('genero').value;

  const getInputs = document.getElementById('infos');
  const inputs = getInputs.querySelectorAll('input');
  
  for(const input of inputs){
    if(input.value === ""){
      ExibirModal("Preencha todos os campos.")
      return;
    }
  }

  if (verificaGenero === '') {
    ExibirModal("Selecione um Gênero!");
    event.preventDefault();
  } else {
    const name = String(document.getElementById('nome').value);
    const phone = String(document.getElementById('telefone').value);
    const gender = String(document.getElementById('genero').value);
    const age = parseInt(document.getElementById('idade').value);
    const address = String(document.getElementById('endereco').value);
    const cityAndState = String(document.getElementById('cidadeestado').value);
    const religion = String(document.getElementById('religiao').value);
    const smallGroup = String(document.getElementById('grupo').value);
    const bibleStudy = String(document.getElementById('estudo').value);

    const registerVisitor = {
      name,
      phone,
      gender,
      age,
      address,
      cityAndState,
      religion,
      smallGroup,
      bibleStudy,
    };

    try {
      const res = await fetch("https://recep10-back.up.railway.app/api/visitantes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(registerVisitor),
      });

      const result = await res.json();

      event.preventDefault(); // Evitando que a página recarregue por padrão

      if (res.status === 201 && result.status === "ok") {
        // Recarregar a página
        window.location.reload();
      } else {
        ExibirModal("Erro ao cadastrar usuário");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

export { abrirDialog2, enviarVisitante, fecharModal };