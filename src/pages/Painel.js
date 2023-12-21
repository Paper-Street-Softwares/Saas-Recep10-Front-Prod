import style from '../css/Painel.module.css'
import style2 from '../css/Visitantes.module.css'
import { abrirDialog2, enviarVisitante, fecharDialog2 } from '../functions/DialogController2'
import { abrirDialog3, fecharDialog3 } from '../functions/DialogController3'
import { abrirDialog4, fecharDialog4} from '../functions/DialogController4'
import { useEffect, useState } from 'react'
import axios from 'axios';
import exit from '../images/exit.png'

function Painel(){

//MÉTODO PARA REQUISITAR TODOS OS VISITANTES

    useEffect(() => {
        axios.get("https://recep10-back.up.railway.app/api/visitantes")
            .then(response => {
                setVisitors(response.data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            }); 
    }, []);

    const [visitors, setVisitors] = useState([]);

//MÉTODO PARA REQUISITAR UM USUÁRIO POR ID

const handleClick = (itemId) => {
    console.log(itemId);

    // Adicione o itemId ao final do endpoint da API
    axios.get(`https://recep10-back.up.railway.app/api/visitantes/${itemId}`)
        .then(response => {
            // Trate a resposta como necessário
            console.log('Resposta da requisição:', response.data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

    return(        
        <div className={style.content}>
            <div className={style.faixa}></div>
            <div className={style.dashboard}>
                <ul>
                    <li onClick={abrirDialog2}>REGISTRAR VISITANTE</li>
                    <li onClick={abrirDialog3}>ADICIONAR VISITA</li>
                    <li onClick={abrirDialog4}>BUSCAR VISITANTES</li>
                    <li>BUSCAR VISITAS</li>
                </ul>
                <dialog className={style.register} id="dialog2">
                    <form id="form" className={style.formulario}>
                        <h1>Cadastro de Visitante</h1>
                            <div>
                                <input maxLength={53} id="nome" type='text' placeholder="Nome completo"></input>
                                <br></br><br></br>
                                <input maxLength={17} id="telefone" type='text' pattern="[0-9]{9,17}" placeholder="Telefone"></input>
                                <br></br><br></br>
                                <select id="genero" defaultValue=""><option value="" disabled>Gênero</option><option>Masculino</option><option>Feminino</option></select>
                                <br></br><br></br>
                                <input id="idade" type="text" maxLength={3} pattern="[0-9]{1,3}" placeholder="Idade"/>
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
                            <button id="enviar" onClick={enviarVisitante} type="submit" className={style.btnregister}>CADASTRAR</button>
                        </div>
                    </form>

                </dialog>

                {/* Acima abre o REGISTRO DE VISITANTES e Abaixo ADICIONA VISITAS aos visitantes */}

                <dialog className={style.register2} id="dialog3">
                    <form className={style.formulario2}>
                    <h1>Adicionar Visita</h1>
                        <div>
                            <input className={style.data} type='date' placeholder="Data"></input>
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

                {/* Abaixo Busca os VISITANTES */}

                <dialog id="dialog4" className={style2.visitantes}>
                    <form>
                        <h1>Visitantes</h1>
                        <div className={style2.quadro}>
                            {visitors.map(item => <div className={style2.nomes} key={item.id} onClick={() => handleClick(item.id)}
                            >
                                <p>{item.name}</p>
                                </div>)}
                        </div>

                        <h1 className={style2.visitante2}>Visitante</h1>
                        <div className={style2.quadro2}>
                            <h2>TESTE</h2>
                        </div>
                    </form>
                    <img onClick={fecharDialog4} alt="close2" className={style2.fechar} src={exit}></img>
                </dialog>

            </div>
        </div>
    )
}

export default Painel