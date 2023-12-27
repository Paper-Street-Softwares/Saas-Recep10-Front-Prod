import React, { useState } from "react";
import forgetPassword from "../../functions/auth/forgetPassword.js";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgetPassword = () => {
    forgetPassword(email);
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleForgetPassword}>
          Solicitar senha
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
