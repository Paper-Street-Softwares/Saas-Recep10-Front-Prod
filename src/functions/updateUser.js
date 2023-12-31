// updateUser.js
import ExibirModal from "./ExibirModal";

const apiUrl = 'https://recep10-back.up.railway.app/api/visitantes';

export const updateUser = async (id) => {
  const infosDiv = document.getElementById("infos");
  const inputs = infosDiv.querySelectorAll("input");

  for (const input of inputs) {
    if (input.value === "") {
      ExibirModal('Preencha todos os campos!');
      return;
    }
  }

  // Adicionando verificações para o campo de telefone
  const phoneInput = document.getElementById('telefoneUpdate');
  const phoneValue = phoneInput.value;
  if (!/^\d+$/.test(phoneValue)) {
    ExibirModal('O campo de telefone só pode conter números.');
    return;
  }

  // Adicionando verificações para o campo de idade
  const ageInput = document.getElementById('idadeUpdate');
  const ageValue = ageInput.value;
  if (!/^\d+$/.test(ageValue)) {
    ExibirModal('O campo de idade só pode conter números.');
    return;
  }

  const userData = {
    name: String(document.getElementById('nomeUpdate').value),
    phone: phoneValue,
    gender: String(document.getElementById('generoUpdate').value),
    age: parseInt(ageValue),
    address: String(document.getElementById('enderecoUpdate').value),
    cityAndState: String(document.getElementById('cidadeUpdate').value),
    religion: String(document.getElementById('religiaoUpdate').value),
    smallGroup: String(document.getElementById('grupoUpdate').value),
    bibleStudy: String(document.getElementById('estudoUpdate').value),
  };

  const x = document.getElementById('generoUpdate').value;

  if (x === '') {
    ExibirModal("Escolha um gênero.");
  } else {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        ExibirModal('Usuário atualizado com sucesso!');
        return response.json();
      } else if (response.status === 404) {
        console.error('Usuário não encontrado: ' + id);
      } else if (response.status === 400) {
        const errorData = await response.json();
        console.error('Erro ao atualizar usuário:', errorData);
        throw new Error('Erro ao atualizar usuário');
      } else {
        console.error('Erro desconhecido ao atualizar usuário:', response);
        throw new Error('Erro desconhecido ao atualizar usuário');
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
      throw error;
    }
  }
};
