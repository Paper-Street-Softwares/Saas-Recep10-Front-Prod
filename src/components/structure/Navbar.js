// Navbar.js
import React from 'react';
import { CiCalendarDate, CiSearch } from 'react-icons/ci';
import { IoIosMore } from 'react-icons/io';
import { PiUserPlusThin } from 'react-icons/pi';
import { CiHome } from 'react-icons/ci';
import style from "../../css/structure/navbar.css";
import { GrUserAdd, GrCalendar, GrHomeRounded, GrSearch } from "react-icons/gr";
import {
  abrirDialog2,
  enviarVisitante,
  fecharDialog2,
} from "../../functions/DialogController2";
import { abrirDialog3, fecharDialog3 } from "../../functions/DialogController3";
import { abrirDialog4, fecharDialog4 } from "../../functions/DialogController4";


const Navbar = ({ onComponentChange }) => {
  return (
    <div className="navbar-Navbar">

      {/* HOME */}
      <div className="individualIcon-Navbar">

        <div className="iconNavbar-Navbar">
          <GrHomeRounded />
        </div>
        <div className="iconName-Navbar">Início</div>
      </div>

      {/* CADASTRO */}
      <div className="individualIcon-Navbar">

        <div onClick={abrirDialog2} className="iconNavbar-Navbar">
          <GrUserAdd />
        </div>
        <div className="iconName-Navbar">Cadastro</div>
      </div>

      {/* VISITA */}
      <div className="individualIcon-Navbar">

        <div onClick={abrirDialog3} className="iconNavbar-Navbar">
          <GrCalendar />
        </div>
        <div className="iconName-Navbar">Visita</div>
      </div>

      {/* ALTERAR */}
      <div className="individualIcon-Navbar">

        <div onClick={abrirDialog4} className="iconNavbar-Navbar">
          <GrSearch />
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
