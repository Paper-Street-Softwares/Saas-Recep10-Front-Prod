// updateUser.js

const apiUrl = 'https://recep10-back.up.railway.app/api/visitantes';

export const updateUser = async (id) => {
    const userData = {
        name: String(document.getElementById('nomeUpdate').value),
        phone: String(document.getElementById('telefoneUpdate').value),
        gender: String(document.getElementById('generoUpdate').value),
        age: parseInt(document.getElementById('idadeUpdate').value),
        address: String(document.getElementById('enderecoUpdate').value),
        cityAndState: String(document.getElementById('cidadeUpdate').value),
        religion: String(document.getElementById('religiaoUpdate').value),
        smallGroup: String(document.getElementById('grupoUpdate').value),
        bibleStudy: String(document.getElementById('estudoUpdate').value),
      };

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',  // Mudei para PATCH
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log('Usuário atualizado com sucesso!');
      return response.json(); // Pode retornar algum dado específico do servidor, se aplicável
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
};
