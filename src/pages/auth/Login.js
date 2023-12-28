import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../../css/login.css";
import loginFunction from "../../functions/auth/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]); // Adiciona esta linha para usar os cookies

  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    if (!email || !password) {
      return;
    }

    const token = await loginFunction(email, password);

    if (token) {
      // Armazena o token nos cookies
      setCookie("jwt", token, { path: "/" });

      // Redireciona para a página desejada após o login
      navigate("/painel");
    } else {
      // Lidar com falha na autenticação
      // Exemplo: exibir uma mensagem de erro
      console.error("Falha na autenticação");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? "error" : ""}
        />
        {emailError && (
          <p className="error-message">Este campo não pode ficar vazio.</p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? "error" : ""}
        />
        {passwordError && (
          <p className="error-message">Este campo não pode ficar vazio.</p>
        )}
        <a id="a1" href="https://wa.me/5561992781077">Esqueceu sua senha?</a>
        <button type="button" onClick={handleLogin}>Acessar</button>
        <div className="signup-links">
        <a id="a2">Não tem conta?</a><a id="a3" href="https://wa.me/5561992781077">Cadastre-se.</a>
        </div>
      </form>      
    </div>
  );
};

export default Login;
