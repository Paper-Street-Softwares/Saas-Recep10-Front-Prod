import style from "../css/Painel.module.css";
import {
  abrirDialog2,
  enviarVisitante,
  fecharDialog2,
} from "../functions/DialogController2";

const Cadastro = () => {
  return (
    <dialog className={style.register} id="dialog2">
      <form id="form" className={style.formulario}>
        <h1>Cadastro de Visitante</h1>
        <div>
          <input
            maxLength={53}
            id="nome"
            type="text"
            placeholder="Nome"
          ></input>
          <input
            maxLength={17}
            id="telefone"
            type="text"
            pattern="[0-9]{9,17}"
            placeholder="Telefone"
          ></input>
          <select id="genero" defaultValue="">
            <option value="" disabled>
              Gênero
            </option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
          <input
            id="idade"
            type="text"
            maxLength={3}
            pattern="[0-9]{1,3}"
            placeholder="Idade"
          />
          <input
            maxLength={50}
            id="endereco"
            type="text"
            placeholder="Endereço"
          ></input>
          <input
            maxLength={50}
            id="cidadeestado"
            type="text"
            placeholder="Cidade e Estado"
          ></input>
          <input
            maxLength={20}
            id="religiao"
            type="text"
            placeholder="Religião"
          ></input>
          <input
            maxLength={53}
            id="grupo"
            type="text"
            placeholder="Frequenta pequeno grupo? Se sim, qual?"
          ></input>
          <input
            maxLength={53}
            id="estudo"
            type="text"
            placeholder="Faz estudo bíblico? Se sim, com quem?"
          ></input>
        </div>
        <div className={style.btns}>
          <button onClick={fecharDialog2} className={style.btnback}>
            VOLTAR
          </button>
          <button
            id="enviar"
            onClick={enviarVisitante}
            type="submit"
            className={style.btnregister}
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Cadastro;
