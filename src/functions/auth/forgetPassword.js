// functions/auth/forgetPassword.js
import axios from "axios";

const forgetPassword = async (email) => {
  try {
    // Verifica se o email foi fornecido
    if (!email || !email.trim()) {
      throw new Error("Por favor, forneça um email válido.");
    }

    // Faz a requisição POST para o servidor
    const response = await axios.post(
      "https://recep10-back.up.railway.app/auth/forgot-password",
      {
        email: email.trim(),
      }
    );

    // Se a resposta for bem-sucedida, mostra um alerta
    if (response.status === 200) {
      alert(
        "Se este email for válido, enviamos um email informando como recuperar sua senha."
      );
    } else {
      throw new Error("Algo deu errado. Tente novamente mais tarde.");
    }
  } catch (error) {
    alert(error.message);
  }
};

export default forgetPassword;
