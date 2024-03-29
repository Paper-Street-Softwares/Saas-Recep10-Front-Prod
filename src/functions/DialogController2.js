import { useState } from "react";
import ExibirModal from "../functions/ExibirModal";

function abrirDialog2() {
  const dialog = document.getElementById("dialog2");
  dialog.showModal();
}

function fecharModal() {
  const genericModall = document.getElementById("genericModal");
  genericModall.close();
  window.location.reload();
}

function fecharSemAtt(event) {
  const genericModall = document.getElementById("genericModal");
  genericModall.close();
  event.preventDefault();
}

function trocarButton() {
  const buttonNoAtt = document.getElementById("closeModalNoAtt");
  buttonNoAtt.style.display = "block";
  const buttonAtt = document.getElementById("closeModal");
  buttonAtt.style.display = "none";
}

function trocarButton2() {
  const buttonNoAtt = document.getElementById("closeModalNoAtt");
  buttonNoAtt.style.display = "none";
  const buttonAtt = document.getElementById("closeModal");
  buttonAtt.style.display = "block";
}

async function enviarVisitante(event) {
  const verificaGenero = document.getElementById("genero").value;

  const getInputs = document.getElementById("infos");
  const inputs = getInputs.querySelectorAll("input");

  // Adicionando verificações para o campo de telefone
  const phoneInput = document.getElementById("telefone");
  const phoneValue = phoneInput.value;

  // for (const input of inputs) {
  //   if (input.value === "") {
  //     if (phoneValue === "") {
  //       console.log(`Telefone em branco`);
  //     } else {
  //       trocarButton();
  //       alert("Preencha todos os campos.");
  //       return;
  //     }
  //   }
  // }

  // Adicionando verificações para o campo de nome
  const nameInput = document.getElementById("nome");
  const nameValue = nameInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(nameValue)) {
    trocarButton();
    alert("O campo de nome só pode conter letras e não pode ficar vazio.");
    event.preventDefault();
    return;
  }

  if (verificaGenero === "") {
    trocarButton();
    alert("Selecione um gênero.");

    event.preventDefault();
  } else {
    trocarButton2();

    // Adicionando verificações para o campo de idade
    const ageInput = document.getElementById("idade");
    const ageValue = ageInput.value;
    if (!/^\d+$/.test(ageValue)) {
      trocarButton();

      alert("O campo de idade só pode conter números e não pode ficar vazio.");
      event.preventDefault();
      return;
    }

    // Adicionando verificações para o campo de endereco
    const addressInput = document.getElementById("endereco");
    const addressValue = addressInput.value;
    if (!/^[a-zA-Z0-9ãáàâéêíóôõúç\s,\(\)\-]+$/.test(addressValue)) {
      trocarButton();

      alert(
        "O campo de endereço só pode conter letras e não pode ficar vazio."
      );

      event.preventDefault();
      return;
    }

    // Adicionando verificações para o campo de cidadeestado
    const cityAndStateInput = document.getElementById("cidadeestado");
    const cityAndStateValue = cityAndStateInput.value;
    if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(cityAndStateValue)) {
      trocarButton();

      alert(
        "O campo de cidade e estado só pode conter letras e não pode ficar vazio."
      );

      event.preventDefault();
      return;
    }

    // Adicionando verificações para o campo de religiao
    const religionInput = document.getElementById("religiao");
    const religionValue = religionInput.value;
    if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(religionValue)) {
      trocarButton();
      alert(
        "O campo de religião só pode conter letras e não pode ficar vazio."
      );

      event.preventDefault();
      return;
    }

    // Adicionando verificações para o campo de grupo
    const groupInput = document.getElementById("grupo");
    const groupValue = groupInput.value;
    if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(groupValue)) {
      trocarButton();

      alert(
        "O campo de pequeno grupo só pode conter letras e não pode ficar vazio."
      );

      event.preventDefault();
      return;
    }

    // Adicionando verificações para o campo de estudo
    const studyInput = document.getElementById("estudo");
    const studyValue = studyInput.value;
    if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(studyValue)) {
      trocarButton();

      alert(
        "O campo de estudo bíblico só pode conter letras e não pode ficar vazio."
      );

      event.preventDefault();
      return;
    }

    const name = String(nameValue);
    const phone = String(document.getElementById("telefone").value);
    const gender = String(document.getElementById("genero").value);
    const age = parseInt(document.getElementById("idade").value);
    const address = String(document.getElementById("endereco").value);
    const cityAndState = String(cityAndStateValue);
    const religion = String(religionValue);
    const smallGroup = String(groupValue);
    const bibleStudy = String(studyValue);

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
      const res = await fetch(
        "https://recep10-back.up.railway.app/api/visitantes",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(registerVisitor),
        }
      );

      const result = await res.json();

      event.preventDefault(); // Evitando que a página recarregue por padrão

      // Verificando se a resposta da API é um objeto válido
      if (result === null) {
        alert("Erro ao cadastrar usuário");
      } else if (res.status === 201) {
        alert("Visitante adicionado com sucesso!");
        window.location.reload();
      } else if (res.status === 400) {
        // Tratando erros específicos do lado do servidor
        trocarButton();

        alert("Um usuário com este telefone ja existe."); // Exiba a mensagem de erro retornada pela API
        console.log(result.error);
      } else {
        // Verificando se o campo `error` da resposta da API está definido
        if (result.error) {
          alert(result.error);
        } else {
          alert("Erro ao cadastrar usuário");
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

export { abrirDialog2, enviarVisitante, fecharModal, fecharSemAtt };
