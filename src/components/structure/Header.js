import React, { useState, useEffect } from "react";
import style from "../../css/structure/header.css";
import profilePic from "../../images/profilePic.png";

const Header = () => {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataAtual(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formatarData = (data) => {
    const options = {
      day: "numeric",
      month: "long",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(data);
  };

  return (
    <div className="header-Header">
      <div className="headerGroup">
        <div className="headerLeft-Header">
          <img id="profilePic-Header" src={profilePic} alt="Profile Pic" />
        </div>
        <div className="textHeader-Header">
          <div className="welcomeMesage-Header">Bem vindo,</div>
          <div className="userName-Header">IASD Nelson Costa</div>
        </div>
      </div>

      <div className="headerRigh-Header">
        <div className="welcomeMesage-Header">Hoje é dia,</div>
        <div className="realTimeHeader-Header">{formatarData(dataAtual)}</div>
      </div>
    </div>
  );
};

export default Header;
