function alert(mensagem) {
    const genericModall = document.getElementById("genericModal");
    const conteudoModall = document.getElementById("msgmodal");
    conteudoModall.innerHTML = mensagem;
    genericModall.showModal();
  }
  
  export default alert;
  