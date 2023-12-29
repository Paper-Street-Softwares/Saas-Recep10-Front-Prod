import style from "../../css/structure/navbar.css";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { PiUserPlusThin } from "react-icons/pi";
import {
  abrirDialog2,
  enviarVisitante,
  fecharDialog2,
} from "../../functions/DialogController2";
import { abrirDialog3, fecharDialog3 } from "../../functions/DialogController3";
import { abrirDialog4, fecharDialog4 } from "../../functions/DialogController4";
import { CiHome } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar-Navbar">
      <div className="individualIcon-Navbar">
        <div className="iconNavbar-Navbar">
          <CiHome />
        </div>
        <div className="iconName-Navbar">Início</div>
      </div>
      <div className="individualIcon-Navbar">
        <div onClick={abrirDialog2} className="iconNavbar-Navbar">
          <PiUserPlusThin />
        </div>
        <div className="iconName-Navbar">Cadastro</div>
      </div>
      <div className="individualIcon-Navbar">
        <div onClick={abrirDialog3} className="iconNavbar-Navbar">
          <CiCalendarDate />
        </div>
        <div className="iconName-Navbar">Visita</div>
      </div>
      <div className="individualIcon-Navbar">
        <div onClick={abrirDialog4} className="iconNavbar-Navbar">
          <CiSearch />
        </div>
        <div className="iconName-Navbar">Alterar</div>
      </div>
      {/* <div className="iconNavbar-Navbar">
        <IoIosMore />
      </div> */}
    </div>
  );
};

export default Navbar;
