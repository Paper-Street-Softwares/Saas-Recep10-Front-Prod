function abrirDialog2() {
  const dialog = document.getElementById("dialog2");
  dialog.showModal();
}

function fecharDialog2() {
  const dialog = document.getElementById("dialog2");
  dialog.close();
}

function enviarVisitante() {


  const form = document.getElementById("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();


    //apenas inputs
    const name = String(document.getElementById('nome').value)
    const phone = String(document.getElementById('telefone').value)
    const gender = String(document.getElementById('genero').value)
    const age = parseInt(document.getElementById('idade').value)
    const address = String(document.getElementById('endereco').value)
    const cityAndState = String(document.getElementById('cidadeestado').value)
    const religion = String(document.getElementById('religiao').value)
    const smallGroup = String(document.getElementById('grupo').value)
    const bibleStudy = String(document.getElementById('estudo').value)
    //apenas inputs

    const data = new FormData(form);

    console.log(data);

    const registerVisitor = {
      name,
      phone,
      gender,
      age,
      address,
      cityAndState,
      religion,
      smallGroup,
      bibleStudy,
    };

    console.log(registerVisitor);

    try {

      const res = await fetch(
        "https://recep10-back.up.railway.app/api/visitantes",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(registerVisitor),
        }
      );

      const btn = document.getElementById("enviar")

      btn.disabled = true;

      if (res.status === 201) {
        console.log("Visitante registrado com sucesso!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err.message);
    }
  });
}

export { abrirDialog2, fecharDialog2, enviarVisitante };
