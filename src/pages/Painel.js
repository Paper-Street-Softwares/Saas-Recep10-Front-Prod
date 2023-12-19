import style from '../css/Painel.module.css'
import { abrirDialog, fecharDialog } from '../functions/DialogController2'

function Painel(){
    return(
        <div className={style.content}>
            <div className={style.faixa}></div>
            <div className={style.dashboard}>
                <ul>
                    <li onClick={abrirDialog}>REGISTRAR VISITANTE</li>
                    <li>ADICIONAR VISITA</li>
                    <li>BUSCAR VISITAS</li>
                </ul>
                <dialog className={style.register} id="dialog2">
                    <form className={style.formulario}>
                        <label>
                            <h1>Cadastro de Visitante</h1>
                            <div><br></br>
                                <input type='text' placeholder="Nome completo"></input>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Telefone"></input>
                            </div>
                            <div><br></br>
                                <select>
                                    <option value="" disabled selected>Gênero</option>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Cidade e Estado"></input>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Religião"></input>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Frequenta pequeno grupo? Se sim, qual?"></input>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Faz estudo bíblico? Se sim, com quem?"></input>
                            </div>
                        </label>
                    </form>
                    <div className={style.btns}>
                        <button onClick={fecharDialog} className={style.btnback}>VOLTAR</button>
                        <button className={style.btnregister}>CADASTRAR</button>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default Painel