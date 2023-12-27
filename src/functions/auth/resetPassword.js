// functions/auth/resetPassword.js
import axios from "axios";

const resetPassword = async (newPassword, repeatPassword, token) => {
  try {
    // Verifica se os campos não estão em branco
    if (!newPassword || !repeatPassword) {
      throw new Error("Os campos não podem ser deixados em branco.");
    }

    // Verifica se as senhas coincidem
    if (newPassword !== repeatPassword) {
      throw new Error("As senhas não coincidem. Tente novamente.");
    }

    // Faz a requisição POST para o servidor, incluindo o token
    const response = await axios.post(
      `https://recep10-back.up.railway.app/auth/reset-password/${token}`,
      {
        newPassword,
      }
    );

    // Se a resposta for bem-sucedida, você pode fazer algo com os dados de resposta se necessário
    if (response.status === 200) {
      alert("Senha redefinida com sucesso!");
    } else {
      throw new Error("Algo deu errado. Tente novamente mais tarde.");
    }
  } catch (error) {
    // Trate o erro conforme necessário (por exemplo, exibindo uma mensagem de erro)
    alert(error.message);
  }
};

export default resetPassword;
