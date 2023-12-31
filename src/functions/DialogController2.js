import { useState } from "react";
import ExibirModal from '../functions/ExibirModal';

function abrirDialog2() {
  const dialog = document.getElementById("dialog2");
  dialog.showModal();
}

function fecharModal() {
  const genericModall = document.getElementById('genericModal');
  genericModall.close();
  window.location.reload();
}

function fecharSemAtt(event) {
  const genericModall = document.getElementById('genericModal');
  genericModall.close();
  event.preventDefault();
}

async function enviarVisitante(event) {
  const verificaGenero = document.getElementById('genero').value;

  const getInputs = document.getElementById('infos');
  const inputs = getInputs.querySelectorAll('input');

  for (const input of inputs) {
    if (input.value === "") {
      ExibirModal("Preencha todos os campos.");
      return;
    }
  }

  // Adicionando verificações para o campo de telefone
  const phoneInput = document.getElementById('telefone');
  const phoneValue = phoneInput.value;
  if (!/^\d+$/.test(phoneValue)) {
    ExibirModal('O campo de telefone só pode conter números.');
    event.preventDefault();
    return;
  }

  // Adicionando verificações para o campo de idade
  const ageInput = document.getElementById('idade');
  const ageValue = ageInput.value;
  if (!/^\d+$/.test(ageValue)) {
    ExibirModal('O campo de idade só pode conter números.');
    event.preventDefault();
    return;
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

      // Verificando se a resposta da API é um objeto válido
      if (result === null) {
        ExibirModal("Erro ao cadastrar usuário");
      } else if (res.status === 201) {
        ExibirModal("Visitante adicionado com sucesso!");
      } else if (res.status === 400) {
        // Tratando erros específicos do lado do servidor
        ExibirModal(result.error); // Exiba a mensagem de erro retornada pela API
      } else {
        // Verificando se o campo `error` da resposta da API está definido
        if (result.error) {
          ExibirModal(result.error);
        } else {
          ExibirModal("Erro ao cadastrar usuário");
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

export { abrirDialog2, enviarVisitante, fecharModal, fecharSemAtt};