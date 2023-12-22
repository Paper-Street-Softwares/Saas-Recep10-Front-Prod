function abrirDialog4() {
    const dialog = document.getElementById('dialog4');
    dialog.showModal();
  }
  
  function fecharDialog4() {
    const dialog = document.getElementById('dialog4');
    dialog.close();
    window.location.reload();
  }
  
  export {abrirDialog4, fecharDialog4}