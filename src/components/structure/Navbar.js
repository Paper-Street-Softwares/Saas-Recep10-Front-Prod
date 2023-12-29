// Navbar.js
import React from 'react';
import { CiCalendarDate, CiSearch } from 'react-icons/ci';
import { IoIosMore } from 'react-icons/io';
import { PiUserPlusThin } from 'react-icons/pi';
import { CiHome } from 'react-icons/ci';
import style from "../../css/structure/navbar.css";

const Navbar = ({ onComponentChange }) => {
  return (
    <div className="navbar-Navbar">

      {/* HOME */}
      <div className="individualIcon-Navbar">
        <div onClick={() => onComponentChange('home')} className="iconNavbar-Navbar">
          <CiHome />
        </div>
        <div className="iconName-Navbar">Início</div>
      </div>

      {/* CADASTRO */}
      <div className="individualIcon-Navbar">
        <div onClick={() => onComponentChange('CadastrarVisitante')} className="iconNavbar-Navbar">
          <PiUserPlusThin />
        </div>
        <div className="iconName-Navbar">Cadastro</div>
      </div>

      {/* VISITA */}
      <div className="individualIcon-Navbar">
        <div onClick={() => onComponentChange('AdicionarVisita')} className="iconNavbar-Navbar">
          <CiCalendarDate />
        </div>
        <div className="iconName-Navbar">Visita</div>
      </div>

      {/* ALTERAR */}
      <div className="individualIcon-Navbar">
        <div onClick={() => onComponentChange('AlterarVisitante')} className="iconNavbar-Navbar">
          <CiSearch />
        </div>
        <div className="iconName-Navbar">Alterar</div>
      </div>

      {/* MAIS */}
      {/* <div className="iconNavbar-Navbar">
        <IoIosMore />
      </div> */}
    </div>
  );
};

export default Navbar;
