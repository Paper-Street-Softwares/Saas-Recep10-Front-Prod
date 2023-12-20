import style from '../css/Painel.module.css'
import { abrirDialog2, enviarVisitante, fecharDialog2 } from '../functions/DialogController2'
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
                    <form id="form" className={style.formulario}>
                        <h1>Cadastro de Visitante</h1>
                            <div>
                                <input maxLength={53} id="nome" type='text' placeholder="Nome completo"></input>
                                <br></br><br></br>
                                <input maxLength={17} id="telefone" type='tel' placeholder="Telefone"></input>
                                <br></br><br></br>
                                <select id="genero" defaultValue=""><option value="" disabled>Gênero</option><option>Masculino</option><option>Feminino</option></select>
                                <br></br><br></br>
                                <input maxLength={3} id="idade" type='age' placeholder="Idade"></input>
                                <br></br><br></br>
                                <input maxLength={50} id="endereco" type='text' placeholder="Endereço"></input>
                                <br></br><br></br>
                                <input maxLength={50} id="cidadeestado" type='text' placeholder="Cidade e Estado"></input>
                                <br></br><br></br>
                                <input maxLength={20} id="religiao" type='text' placeholder="Religião"></input>
                                <br></br><br></br>
                                <input maxLength={53} id="grupo" type='text' placeholder="Frequenta pequeno grupo? Se sim, qual?"></input>
                                <br></br><br></br>
                                <input maxLength={53} id="estudo" type='text' placeholder="Faz estudo bíblico? Se sim, com quem?"></input>
                        </div>
                        <div className={style.btns}>
                            <button onClick={fecharDialog2} className={style.btnback}>VOLTAR</button>
                            <button onClick={enviarVisitante} type="submit" className={style.btnregister}>CADASTRAR</button>
                        </div>
                    </form>

                </dialog>

                {/* Acima abre o REGISTRO DE VISITANTES e Abaixo ADICIONA VISITAS aos visitantes */}

                <dialog className={style.register2} id="dialog3">
                    <form className={style.formulario2}>
                    <h1>Adicionar Visita</h1>
                        <div>
                            <input className={style.data} type='text' placeholder="Data"></input>
                            <br></br><br></br>
                            <select defaultValue="">
                                <option value="" disabled>Visitantes</option>
                                <option>Carlos Daniel</option>
                            </select>
                        </div>
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