import style from "../css/Interface.module.css"
import Navbar from "../components/Navbar"
import logo from "../images/logo.png"
import background from "../images/church.jpg"

function Interface(){
    return(
        <div className={style.content}>
            <img className={style.backg} src={background} alt="background"></img>
                <Navbar/>
                <p className={style.nomeigreja}>Adventista do 7º Dia</p>
                <div className={style.geral}>
                    <h1>Ame a Deus,<br></br> ame servir.</h1>
                </div>
                <div>
                    <ul className={style.bar}>
                        <li>COMUNIDADE</li>
                        <li>SOBRE NÓS</li>
                    </ul>
                </div>
                <img className={style.logoinicio} src={logo} alt="logo"></img>
        </div>
    )
}

export default Interface