import style from "../../css/Painel.module.css";
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

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarborder} />
      <div onClick={abrirDialog2} className={style.icon}>
        <PiUserPlusThin />
      </div>
      <div onClick={abrirDialog3} className={style.icon}>
        <CiCalendarDate />
      </div>
      <div onClick={abrirDialog4} className={style.icon}>
        <CiSearch />
      </div>
      <div className={style.icon}>
        <IoIosMore />
      </div>
    </div>
  );
};

export default Navbar;
