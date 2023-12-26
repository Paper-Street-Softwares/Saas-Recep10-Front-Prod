// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import loginFunction from "../functions/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

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

    const success = await loginFunction(email, password);

    if (success) {
      navigate("/painel");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="inputlogin"
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
