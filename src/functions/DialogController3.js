function abrirDialog3() {
    const dialog = document.getElementById('dialog3');
    dialog.showModal();
  }
  
  function fecharDialog3(event) {
    const dialog = document.getElementById('dialog3');
    dialog.close();
  }
  
  export {abrirDialog3, fecharDialog3}