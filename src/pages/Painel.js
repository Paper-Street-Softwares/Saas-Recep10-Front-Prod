import style from '../css/Painel.module.css'
import { abrirDialog2, fecharDialog2 } from '../functions/DialogController2'
import { abrirDialog3, fecharDialog3 } from '../functions/DialogController3'

function Painel(){
    return(
        <div className={style.content}>
            <div className={style.faixa}></div>
            <div className={style.dashboard}>
                <ul>
                    <li onClick={abrirDialog2}>REGISTRAR VISITANTE</li>
                    <li onClick={abrirDialog3} >ADICIONAR VISITA</li>
                    <li>BUSCAR VISITAS</li>
                </ul>
                <dialog className={style.register} id="dialog2">
                    <form className={style.formulario}>
                    <h1>Cadastro de Visitante</h1>
                        <label>
                            <div><br></br>
                                <input type='text' placeholder="Nome completo"></input>
                            </div>
                            <div><br></br>
                                <input type='text' placeholder="Telefone"></input>
                            </div>
                            <div><br></br>
                                <select defaultValue="">
                                    <option value="" disabled>Gênero</option>
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
                        <button onClick={fecharDialog2} className={style.btnback}>VOLTAR</button>
                        <button className={style.btnregister}>CADASTRAR</button>
                    </div>
                </dialog>

                {/* Acima abre o REGISTRO DE VISITANTES e Abaixo ADICIONA VISITAS aos visitantes */}

                <dialog className={style.register2} id="dialog3">
                    <form className={style.formulario2}>
                    <h1>Adicionar Visita</h1>
                        <label>
                            <div><br></br>
                                <input className={style.data} type='text' placeholder="Data"></input>
                            </div>
                            <div><br></br>
                                <select defaultValue="">
                                    <option value="" disabled>Visitantes</option>
                                    <option>Carlos Daniel</option>
                                </select>
                            </div>
                        </label>
                    </form>
                    <div className={style.btns}>
                        <button onClick={fecharDialog3} className={style.btnback}>VOLTAR</button>
                        <button onClick={abrirDialog3} className={style.btnregister}>ADICIONAR</button>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default Painel