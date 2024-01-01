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
        <div className="iconContainer">
          <a
            onClick={() => onComponentChange("home")}
            className="iconNavbar-Navbar"
          >
            <GrHomeRounded />
          </a>
          <div className="iconName-Navbar">Início</div>
        </div>
      </div>

      {/* CADASTRO */}
      <div className="individualIcon-Navbar">
        <div className="iconContainer">
          <a
            onClick={() => onComponentChange("CadastrarVisitante")}
            className="iconNavbar-Navbar"
          >
            <GrUserAdd />
          </a>
          <div className="iconName-Navbar">Cadastro</div>
        </div>
      </div>

      {/* VISITA */}
      <div className="individualIcon-Navbar">
        <div className="iconContainer">
          <a
            onClick={() => onComponentChange("AdicionarVisita")}
            className="iconNavbar-Navbar"
          >
            <GrCalendar />
          </a>
          <div className="iconName-Navbar">Visita</div>
        </div>
      </div>

      {/* ALTERAR */}
      <div className="individualIcon-Navbar">
        <div className="iconContainer">
          <a
            onClick={() => onComponentChange("AlterarVisitante")}
            className="iconNavbar-Navbar"
          >
            <GrSearch />
          </a>
          <div className="iconName-Navbar">Alterar</div>
        </div>
      </div>

      {/* RELATORIOS */}
      <div className="individualIcon-Navbar">
        <div className="iconContainer">
          <a
            onClick={() => onComponentChange("Relatorios")}
            className="iconNavbar-Navbar"
          >
            <GrBarChart />
          </a>
          <div className="iconName-Navbar">Relatórios</div>
        </div>
      </div>

      {/* MAIS */}
      {/* <div className="iconNavbar-Navbar">
        <IoIosMore />
      </div> */}
    </div>
  );
};

export default Navbar;
