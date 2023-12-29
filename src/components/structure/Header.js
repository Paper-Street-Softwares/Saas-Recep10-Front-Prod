import style from "../../css/structure/header.css";
import profilePic from "../../images/profilePic.png";

const Header = () => {
  return (
    <div className="header-Header">
      <div className="profilePic-Header" id="profilePic-Header">
        <img id="profilePic-Header" src={profilePic} />
      </div>
      <div className="welcomeMesage-Header"></div>
      <div className="userName-Header"></div>
    </div>
  );
};

export default Header;
