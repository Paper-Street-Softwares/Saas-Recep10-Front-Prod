import axios from "axios";

const login = async (email, senha) => {
  try {
    const response = await axios.post(
      "https://recep10-back.up.railway.app/auth",
      {
        email: email,
        password: senha,
      }
    );

    if (response.status === 200) {
      alert("Autenticação realizada com sucesso");
      return true;
    }

    console.log(response);
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Email ou senha inválidos.");
  }

  return false;
};

export default login;
