import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../../css/login.css";
import loginFunction from "../../functions/auth/login";
import logoRecep10 from "../../images/logoRecep10.jpg"

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
      <div id="imgLogoRecep10-container">
        <img id="imgLogoRecep10" src={logoRecep10} />
      </div>
      <h2 id="loginh2">Entre com seu e-mail e senha</h2>
      <form id="loginform">
        <div class="inputgroup">
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError ? "error" : ""} />
          <label id="labellabel" class="placeholder">E-mail</label>
            {emailError && (
            <p className="error-message">Este campo não pode ficar vazio.</p>
        )}
        </div>
        <div class="inputgroup">
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError ? "error" : ""} />
          {passwordError && (
            <p className="error-message">Este campo não pode ficar vazio.</p>
          )}
          <label id="loginlabel" class="placeholder">Senha</label>
        </div>
        <a id="logina1" href="https://wa.me/5561992781077">Esqueceu sua senha?</a>
        <button type="button" onClick={handleLogin}>Acessar</button>
        <div className="signup-links">
        <a id="logina2">Não tem conta?</a><a id="logina3" href="https://wa.me/5561992781077">Cadastre-se.</a>
        </div>
      </form>      
    </div>
  );
};

export default Login;
