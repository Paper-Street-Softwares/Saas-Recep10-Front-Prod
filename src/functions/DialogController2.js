function abrirDialog2() {
    const dialog = document.getElementById('dialog2');
    dialog.showModal();
  }
  
  function fecharDialog2() {
    const dialog = document.getElementById('dialog2');
    dialog.close();
  }
  
  export {abrirDialog2, fecharDialog2}