import React, { useState } from "react";
import { useParams } from "react-router-dom";
import resetPassword from "../../functions/auth/resetPassword";

const ResetPassword = () => {
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleResetPassword = () => {
    resetPassword(newPassword, repeatPassword, token);
  };

  return (
    <div>
      <h2>Redefinir Senha para o Token: {token}</h2>
      <form>
        <label>
          Insira sua nova senha:
          <input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <label>
          Repita sua senha:
          <input
            type="password"
            placeholder="Repita a senha"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleResetPassword}>
          Redefinir Senha
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
