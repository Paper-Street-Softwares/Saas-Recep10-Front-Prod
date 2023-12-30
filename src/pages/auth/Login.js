import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../../css/login.css";
import loginFunction from "../../functions/auth/login";
import logoRecep10 from "../../images/logoRecep10.png";

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
    <div className="body-Login">
      <div className="header-Login"></div>
      <div className="main-Login">
        <div className="top-Section-Login">
          <div id="imgLogoRecep10-Login">
            <img id="imgLogoRecep10-Login" src={logoRecep10} />
          </div>
        </div>
        <div className="mid-Section-Login">
          <h2 id="title-Login">Entre com seu e-mail e senha</h2>
          <form id="form-Login">
            <div className="inputs-Login">
              <input
                type="text"
                id="emailInput-Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "error" : ""}
                placeholder="email"
              />
              {emailError && (
                <p className="error-message">
                  Este campo não pode ficar vazio.
                </p>
              )}

              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? "error" : ""}
                placeholder="Senha"
              />
              {passwordError && (
                <p className="error-message">
                  Este campo não pode ficar vazio.
                </p>
              )}
            </div>
            <a id="links-Login" href="https://wa.me/5561992781077">
              Esqueceu sua senha?
            </a>
          </form>
        </div>
        <div className="bot-Section-Login">
          <button id="buttonSignup-Login" type="button" onClick={handleLogin}>
            Acessar
          </button>
          <div className="signupLinks-Login">
            <p id="texts-Login">Não tem conta?</p>
            <a id="links-Login" href="https://wa.me/5561992781077">
              Cadastre-se.
            </a>
          </div>
        </div>
      </div>
      <div className="footer-Login"></div>
    </div>
  );
};

export default Login;
