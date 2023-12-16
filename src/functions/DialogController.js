function abrirDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
  }
  
  function fecharDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
  }
  
  export {abrirDialog, fecharDialog}