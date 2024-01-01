import { fecharModal, fecharSemAtt } from "../../functions/DialogController2";

function Modal() {
  return (
    <div className="modalContent-Modal">
      <dialog id="genericModal">
        <p className="titles-Global" id="msgmodal">
          Visitante registrado com sucesso!
        </p>
        <button
          className="buttonBack-Global"
          onClick={fecharModal}
          id="closeModal"
        >
          FECHAR
        </button>
        <button style={{display: 'none'}} className="button-Global" onClick={fecharSemAtt} id="closeModalNoAtt">
          Fechar
        </button>
      </dialog>
    </div>
  );
}

export default Modal;
