import { useEffect } from "react";

function ExibirModal(mensagem) {
    const genericModall = document.getElementById("genericModal");
    const conteudoModall = document.getElementById("msgmodal");
    conteudoModall.innerHTML = mensagem;
    genericModall.showModal();

    useEffect(() => {
    
        // Aguarda 2 segundos e executa o código
        const timeoutId = setTimeout(() => {
            const genericModall = document.getElementById("genericModal");
            genericModall.close();
        }, 2000);
    
        // Limpa o timeout quando o componente é desmontado
        return () => clearTimeout(timeoutId);
      }, []);
}

export default ExibirModal;