import React, { useState, useEffect } from 'react';
import style from '../css/Painel.module.css';
import { abrirDialog, fecharDialog } from '../functions/DialogController2';
import resgistervisit from '../images/registervisit.png';
import resgistervisitor from '../images/registervisitor.png';
import visits from '../images/visits.png';
import visitors from '../images/visitors.png';
import training from '../images/training.png';

function Painel() {
  const [dataHoraAtual, setDataHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataHoraAtual(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formatarData = (data) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString(undefined, options);
  };

  const formatarHora = (data) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return data.toLocaleTimeString(undefined, options);
  };

  return (
    <div className={style.content}>
      <div className={style.navbar} />
      <div className={style.dashboard}>
        <div className={style.painelicons}>
            <img onClick={abrirDialog} className={style.iconreg} src={resgistervisit} />
            <img className={style.iconregvis} src={resgistervisitor} />
            <img className={style.iconvisitor} src={visitors} />
            <img className={style.iconvisitis} src={visits} />
            <img className={style.icontrain} src={training} />
        </div>
        <ul>
        <li onClick={abrirDialog}>REGISTRAR VISITANTE</li>
                    <li>ADICIONAR VISITA</li>                    
                    <li>BUSCAR VISITANTES</li>
                    <li>RELATÓRIOS</li>
                    <li>TREINAMENTOS</li>
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
      <div className={style.faixa} />
      <div className={style.body}>
        <h1>SEJA BEM-VINDO</h1>
        <h2>
          Hoje é {formatarData(dataHoraAtual)} - {formatarHora(dataHoraAtual)}
        </h2>
      </div>
    </div>
  );
}

export default Painel;
