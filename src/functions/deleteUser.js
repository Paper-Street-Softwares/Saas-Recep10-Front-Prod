// deleteUser.js

const apiUrl = 'https://recep10-back.up.railway.app/api/visitantes';

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Usuário excluído com sucesso!');
      // Pode retornar algum dado específico do servidor, se aplicável
    } else if (response.status === 404) {
      console.error('Usuário não encontrado: ' + id);
    } else {
      const errorData = await response.text();
      console.error('Erro ao excluir usuário:', errorData);
      throw new Error('Erro ao excluir usuário');
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    throw error;
  }
};
