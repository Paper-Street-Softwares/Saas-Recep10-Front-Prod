import style from '../css/Navbar.module.css'
import { abrirDialog } from '../functions/DialogController'

function Navbar(){
    return(
        <div className={style.content}>
            <button onClick={abrirDialog}>ENTRAR</button>
            <dialog>
                <div className={style.form}>
                    <h1>TESTE</h1>
                </div>
            </dialog>
        </div>
    )
}

export default Navbar