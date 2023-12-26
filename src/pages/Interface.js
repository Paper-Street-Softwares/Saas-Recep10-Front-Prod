import style from "../css/Interface.module.css"
import style2 from "../css/Navbar.module.css"
import logo from "../images/logo.png"
import background from "../images/church.jpg"
import { useNavigate } from 'react-router-dom'
import { abrirDialog, fecharDialog } from '../functions/DialogController'
import exit from '../images/exit.png'

function Interface(){

const navigate = useNavigate();

    return(
        <div className={style.content}>
            <img className={style.backg} src={background} alt="background"></img>
                <div className={style2.content}>
                <button onClick={abrirDialog}>ENTRAR</button>
                    <dialog>
                        <img onClick={fecharDialog} className={style2.close} src={exit} alt="sair"></img>
                        <div className={style2.login}>
                            <input type="text" name="campo" id="campologin" placeholder="Digite seu email aqui"></input>
                        </div>
                        <div className={style2.login}>
                            <input type="text" name="senha" id="camposenha" placeholder="Digite sua senha aqui"></input>
                        </div>
                        <button onClick={() => navigate('/painel')} style={{width: '100px', height: '40px'}} id="fazerlogin">LOGAR</button>
                    </dialog>
                </div>
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