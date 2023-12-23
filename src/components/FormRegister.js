import { abrirDialog3, fecharDialog3 } from "../functions/DialogController3"
import style from '../css/Painel.module.css'

function FormRegister(){
    return(
        <dialog className={style.register2} id="dialog3">
        <form className={style.formulario2}>
        <h1>Adicionar Visita</h1>
            <div>
                <input className={style.data} type='date' placeholder="Data"></input>
                <br></br><br></br>
                <div className="divSearch">
                  <label htmlFor="search">Buscar Visitante: </label>
                  <input type="search" />
                </div>
                <div className="content">
        
                </div>
            </div>
        </form>
        <div className={style.btns}>
            <button onClick={fecharDialog3} className={style.btnback}>VOLTAR</button>
            <button onClick={abrirDialog3} className={style.btnregister}>ADICIONAR</button>
        </div>
        
        </dialog>
        )
}

export default FormRegister


