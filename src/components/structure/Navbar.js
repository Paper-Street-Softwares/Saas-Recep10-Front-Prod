// Navbar.js
import React from "react";
import {
  GrUserAdd,
  GrCalendar,
  GrHomeRounded,
  GrSearch,
  GrBarChart,
} from "react-icons/gr";
import style from "../../css/structure/navbar.css";

const Navbar = ({ onComponentChange }) => {
  return (
    <div className="navbar-Navbar">
      {/* HOME */}
      <div className="individualIcon-Navbar">
        <div
          onClick={() => onComponentChange("home")}
          className="iconNavbar-Navbar"
        >
          <GrHomeRounded />
        </div>
        <div className="iconName-Navbar">Início</div>
      </div>

      {/* CADASTRO */}
      <div className="individualIcon-Navbar">
        <div
          onClick={() => onComponentChange("CadastrarVisitante")}
          className="iconNavbar-Navbar"
        >
          <GrUserAdd />
        </div>
        <div className="iconName-Navbar">Cadastro</div>
      </div>

      {/* VISITA */}
      <div className="individualIcon-Navbar">
        <div
          onClick={() => onComponentChange("AdicionarVisita")}
          className="iconNavbar-Navbar"
        >
          <GrCalendar />
        </div>
        <div className="iconName-Navbar">Visita</div>
      </div>

      {/* ALTERAR */}
      <div className="individualIcon-Navbar">
        <div
          onClick={() => onComponentChange("AlterarVisitante")}
          className="iconNavbar-Navbar"
        >
          <GrSearch />
        </div>
        <div className="iconName-Navbar">Alterar</div>
      </div>

      {/* RELATORIOS */}
      <div className="individualIcon-Navbar">
        <div
          onClick={() => onComponentChange("Relatorios")}
          className="iconNavbar-Navbar"
        >
          <GrBarChart />
        </div>
        <div className="iconName-Navbar">Relatórios</div>
      </div>

      {/* MAIS */}
      {/* <div className="iconNavbar-Navbar">
        <IoIosMore />
      </div> */}
    </div>
  );
};

export default Navbar;
