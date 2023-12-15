import style from "../css/Interface.module.css"
import Navbar from "../components/Navbar"
import logo from "../images/logo.png"

function Interface(){
    return(
        <div className={style.content}>
            <Navbar/>
            <div className={style.geral}>
                <h1>Seja Bem-Vindo(a)</h1>
            </div>
            <img src={logo} alt="logo"></img>
        </div>
    )
}

export default Interface