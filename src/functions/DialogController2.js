function abrirDialog2() {
  const dialog = document.getElementById('dialog2');
  dialog.showModal();
}

function fecharDialog2() {
  const dialog = document.getElementById('dialog2');
  dialog.close();
}

function enviarVisitante() {

  const form = document.getElementById('form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(form);

    // Construa o objeto de dados com os valores de todos os campos
    const visitante = {
      nome: data.get('nome'),
      telefone: data.get('telefone'),
      genero: data.get('genero'),
      idade: data.get('idade'),
      endereco: data.get('endereco'),
      cidadeestado: data.get('cidadeestado'),
      religiao: data.get('religiao'),
      grupo: data.get('grupo'),
      estudo: data.get('estudo'),
    };

    // Envie o objeto de dados para o servidor
    try {
      const res = await fetch(
        'https://recep10-back.up.railway.app/api/visitantes',
        {
          method: 'POST',
          body: data,
        },
      );

      // Se a solicitação for bem-sucedida, imprima uma mensagem de sucesso
      if (res.status === 201) {
        console.log('Visitante registrado com sucesso!');
      }
    } catch (err) {
      // Se a solicitação falhar, imprima uma mensagem de erro
      console.log(err.message);
    }
  });
}

export {abrirDialog2, fecharDialog2, enviarVisitante}
