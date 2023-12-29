import style from "../../css/structure/header.css";
import profilePic from "../../images/profilePic.png";

const Header = () => {
  return (
    <div className="header-Header">
      <div className="profilePic-Header" id="profilePic-Header">
        <img id="profilePic-Header" src={profilePic} />
      </div>
      <div className="textHeader-Header">
        <div className="welcomeMesage-Header">Bem vindo,</div>
        <div className="userName-Header">Ediscre</div>
      </div>
    </div>
  );
};

export default Header;