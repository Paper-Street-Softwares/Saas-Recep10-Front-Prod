import { fecharModal, fecharSemAtt } from "../../functions/DialogController2";

function Modal() {
  return (
    <div>
      <dialog id="genericModal">
        <p id="msgmodal">Visitante registrado com sucesso!</p>
        <button className="button-Global" onClick={fecharModal} id="closeModal">
          Fechar
        </button>
        <button style={{display: 'none'}} className="button-Global" onClick={fecharSemAtt} id="closeModalNoAtt">
          Fechar
        </button>
      </dialog>
    </div>
  );
}

export default Modal;
