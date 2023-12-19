function abrirDialog() {
    const dialog = document.getElementById('dialog2');
    dialog.showModal();
  }
  
  function fecharDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
  }
  
  export {abrirDialog, fecharDialog}