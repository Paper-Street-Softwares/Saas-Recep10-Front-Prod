import style from "../../css/main/cadastrarvisitante.css";
import inputstyle from "../../css/structure/input.css";
import {
  abrirDialog2,
  enviarVisitante,
  fecharDialog2,
} from "../../functions/DialogController2";

const CadastrarVisitante = () => {
  return (
    <div className="main-CadastrarVisitantes">
      <div className="title-CadastrarVisitantes">
        <p className="titles-Global">Cadastro de Visitante</p>
      </div>
      <div className="form-CadastrarVisitantes">
        <form id="form" className="inputsForm-CadastrarVisitantes">
          <input
            className="inputs-Global"
            maxLength={53}
            id="nome"
            type="text"
            placeholder="Nome"
          ></input>
          <input
            className="inputs-Global"
            maxLength={17}
            id="telefone"
            type="text"
            pattern="[0-9]{9,17}"
            placeholder="Telefone"
          ></input>
          <select className="inputs-Global" id="genero" defaultValue="">
            <option value="" disabled>
              Gênero
            </option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
          <input
            className="inputs-Global"
            id="idade"
            type="text"
            maxLength={3}
            pattern="[0-9]{1,3}"
            placeholder="Idade"
          />
          <input
            className="inputs-Global"
            maxLength={50}
            id="endereco"
            type="text"
            placeholder="Endereço"
          ></input>
          <input
            className="inputs-Global"
            maxLength={50}
            id="cidadeestado"
            type="text"
            placeholder="Cidade e Estado"
          ></input>
          <input
            className="inputs-Global"
            maxLength={20}
            id="religiao"
            type="text"
            placeholder="Religião"
          ></input>
          <input
            className="inputs-Global"
            maxLength={53}
            id="grupo"
            type="text"
            placeholder="Frequenta pequeno grupo? Se sim, qual?"
          ></input>
          <input
            className="inputs-Global"
            maxLength={53}
            id="estudo"
            type="text"
            placeholder="Faz estudo bíblico? Se sim, com quem?"
          ></input>

          <div className={style.btns}>
            <div className="buttonGroup">
              <button onClick={fecharDialog2} className="buttonBack-Global">
                VOLTAR
              </button>
              <button
                id="enviar"
                onClick={enviarVisitante}
                type="submit"
                className="button-Global"
              >
                CADASTRAR
              </button>
            </div>
          </div>
        </form>
      </div>
      <dialog className="dialog-CadastrarVisitantes" id="dialog2"></dialog>
    </div>
  );
};

export default CadastrarVisitante;
