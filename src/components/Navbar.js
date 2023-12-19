import style from '../css/Navbar.module.css'
import { abrirDialog, fecharDialog } from '../functions/DialogController'
import exit from '../images/exit.png'

function Navbar(){
    return(
        <div className={style.content}>
            <button onClick={abrirDialog}>ENTRAR</button>
            <dialog>
                <img onClick={fecharDialog} className={style.close} src={exit} alt="sair"></img>
                <div className={style.form}>
                    <h1>ENTRAR</h1>
                </div>
                <div className={style.login}>
                    <input type="text" name="campo" id="campologin" placeholder="Digite seu email aqui"></input>
                </div>
                <div className={style.login}>
                    <input type="text" name="senha" id="camposenha" placeholder="Digite sua senha aqui"></input>
                </div>
            </dialog>
        </div>
    )
}

export default Navbar