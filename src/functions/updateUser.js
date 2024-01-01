import ExibirModal from "./ExibirModal";

const apiUrl = "https://recep10-back.up.railway.app/api/visitantes";

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

export const updateUser = async (id) => {
  const infosDiv = document.getElementById("infos");
  const inputs = infosDiv.querySelectorAll("input");

  for (const input of inputs) {
    if (input.value === "") {
      trocarButton();
      ExibirModal("Preencha pelo menos um campo!");
      return;
    }
  }

  // Adicionando verificações para o campo de telefone
  const phoneInput = document.getElementById("telefoneUpdate");
  const phoneValue = phoneInput.value;
  if (!/^\d+$/.test(phoneValue)) {
    trocarButton();
    ExibirModal("O campo de telefone só pode conter números.");
    return;
  }

  // Adicionando verificações para o campo de idade
  const ageInput = document.getElementById("idadeUpdate");
  const ageValue = ageInput.value;
  if (!/^\d+$/.test(ageValue)) {
    trocarButton();
    ExibirModal("O campo de idade só pode conter números.");
    return;
  }

  // Adicionando verificações para o campo de nomeUpdate
  const nameUpdateInput = document.getElementById("nomeUpdate");
  const nameUpdateValue = nameUpdateInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(nameUpdateValue)) {
    trocarButton();
    ExibirModal("O campo de nome só pode conter letras.");
    return;
  }

  // Adicionando verificações para o campo de cidadeUpdate
  const cityUpdateInput = document.getElementById("cidadeUpdate");
  const cityUpdateValue = cityUpdateInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(cityUpdateValue)) {
    trocarButton();
    ExibirModal("O campo de cidade e estado só pode conter letras.");
    return;
  }

  // Adicionando verificações para o campo de religiaoUpdate
  const religionUpdateInput = document.getElementById("religiaoUpdate");
  const religionUpdateValue = religionUpdateInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(religionUpdateValue)) {
    trocarButton();
    ExibirModal("O campo de religião só pode conter letras.");
    return;
  }

  // Adicionando verificações para o campo de grupoUpdate
  const groupUpdateInput = document.getElementById("grupoUpdate");
  const groupUpdateValue = groupUpdateInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(groupUpdateValue)) {
    trocarButton();
    ExibirModal("O campo de pequeno grupo só pode conter letras.");
    return;
  }

  // Adicionando verificações para o campo de estudoUpdate
  const studyUpdateInput = document.getElementById("estudoUpdate");
  const studyUpdateValue = studyUpdateInput.value;
  if (!/^[a-zA-Zãáàâéêíóôõúç\s\-\,\(\)]+$/.test(studyUpdateValue)) {
    trocarButton();
    ExibirModal("O campo de estudo bíblico só pode conter letras.");
    return;
  }

  const userData = {
    name: String(nameUpdateValue),
    phone: phoneValue,
    gender: String(document.getElementById("generoUpdate").value),
    age: parseInt(ageValue),
    address: String(document.getElementById("enderecoUpdate").value),
    cityAndState: String(cityUpdateValue),
    religion: String(religionUpdateValue),
    smallGroup: String(groupUpdateValue),
    bibleStudy: String(studyUpdateValue),
  };

  const x = document.getElementById("generoUpdate").value;

  if (x === "") {
    trocarButton();
    ExibirModal("Escolha um gênero (masculino ou feminino).");
  } else {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        trocarButton2();
        ExibirModal("Usuário atualizado com sucesso!");
        return response.json();
      } else if (response.status === 404) {
        console.error("Usuário não encontrado: " + id);
      } else if (response.status === 400) {
        const errorData = await response.json();
        console.error("Erro ao atualizar usuário:", errorData);
        throw new Error("Erro ao atualizar usuário");
      } else {
        console.error("Erro desconhecido ao atualizar usuário:", response);
        throw new Error("Erro desconhecido ao atualizar usuário");
      }
    } catch (error) {
      console.error("Erro durante a requisição:", error);
      throw error;
    }
  }
};
