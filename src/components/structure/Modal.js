import { fecharModal } from "../../functions/DialogController2";

function Modal() {
  return (
    <dialog id="genericModal">
      <p id="msgmodal">Visitante registrado com sucesso!</p>
      <button onClick={fecharModal} id="closeModal">
        Fechar
      </button>
    </dialog>
  );
}

export default Modal;
