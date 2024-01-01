import style from "../../css/main/cadastrarvisitante.css";
import inputstyle from "../../css/structure/input.css";
import { enviarVisitante } from "../../functions/DialogController2";
import PrimeiraLetraMaiuscula from "../util/PrimeiraLetraMaiuscula";

const CadastrarVisitante = () => {
  return (
    <div className="main-CadastrarVisitantes">
      <div className="title-CadastrarVisitantes">
        <p className="titles-Global">Cadastro de Visitante</p>
        <p className="text-Home">
          Preencha todos os campos abaixo para adicionar um novo visitante.
        </p>
      </div>
      <div id="infos" className="form-CadastrarVisitantes">
        <form id="form" className="inputsForm-CadastrarVisitantes">
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={53}
            id="nome"
            type="text"
            placeholder="Nome"
          />
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
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={50}
            id="endereco"
            type="text"
            placeholder="Endereço"
          />
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={50}
            id="cidadeestado"
            type="text"
            placeholder="Cidade e Estado"
          />
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={20}
            id="religiao"
            type="text"
            placeholder="Religião"
          />
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={53}
            id="grupo"
            type="text"
            placeholder="Frequenta pequeno grupo? Se sim, qual?"
          />
          <PrimeiraLetraMaiuscula
            className="inputs-Global"
            maxLength={53}
            id="estudo"
            type="text"
            placeholder="Faz estudo bíblico? Se sim, com quem?"
          />

          <div className={style.btns}>
            <div className="buttonGroup">
              <button
                id="enviar"
                onClick={enviarVisitante}
                type="button"
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
