import style from "../css/painel.css";
import AdicionarVisita from "../components/main/AdicionarVisita";
import Relatorios from "../components/main/Relatorios";
import Navbar from "../components/structure/Navbar";
import CadastrarVisitante from "../components/main/CadastrarVisitante";
import AlterarVisitante from "../components/main/AlterarVisitante";
import Header from "../components/structure/Header";
import Modal from "../components/structure/Modal";

function Painel() {
  // /*Não mover o baseUrl pra baixo*/
  // const baseUrl = "https://recep10-back.up.railway.app";

  // const [dataHoraAtual, setDataHoraAtual] = useState(new Date());

  // const [dialogAtiva, setDialogAtiva] = useState(false);
  // const [visitanteSelecionado, setVisitanteSelecionado] = useState(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setDataHoraAtual(new Date());
  //   }, 1000);

  //   // Limpa o intervalo quando o componente é desmontado
  //   return () => clearInterval(intervalId);
  // }, []);

  // const formatarData = (data) => {
  //   const options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   return data.toLocaleDateString(undefined, options);
  // };

  // const formatarHora = (data) => {
  //   const options = { hour: "numeric", minute: "numeric", second: "numeric" };
  //   return data.toLocaleTimeString(undefined, options);
  // };

  // //MÉTODO PARA REQUISITAR TODOS OS VISITANTES

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/api/visitantes`)
  //     .then((response) => {
  //       setVisitors(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro na requisição:", error);
  //     });
  // }, []);

  // const [visitors, setVisitors] = useState([]);

  // //MÉTODO PARA REQUISITAR UM USUÁRIO POR ID

  // const handleClick = (itemId) => {
  //   // Adicione o itemId ao final do endpoint da API
  //   const pegarQuadro = document.getElementById("quadro");
  //   const pegarQuadro2 = document.getElementById("quadro2");
  //   pegarQuadro.style.visibility = "hidden";
  //   pegarQuadro.disabled = true;
  //   pegarQuadro2.style.visibility = "visible";

  //   axios
  //     .get(`${baseUrl}/api/visitantes/${itemId}`)
  //     .then((response) => {
  //       setVisitor(response.data);
  //       setVisitanteSelecionado(itemId);
  //     })
  //     .catch((error) => {
  //       console.error("Erro na requisição:", error);
  //     });

  //   const quadroVisitante = document.getElementById("quadro2");
  //   const ativarEdicao = document.getElementById("edit");
  //   const delDados = document.getElementById("del");

  //   ativarEdicao.style.pointerEvents = "auto";
  //   ativarEdicao.style.cursor = "pointer";

  //   delDados.style.opacity = "1";
  //   delDados.style.pointerEvents = "auto";
  //   delDados.style.cursor = "pointer";

  //   anime({
  //     targets: [ativarEdicao, quadroVisitante],
  //     duration: 10,
  //     easing: "linear",
  //     opacity: 1,
  //   });
  // };

  // const [visitor, setVisitor] = useState([]);

  // //MÉTODO PARA DELETAR USUÁRIO
  // const handleDeleteUser = async (event) => {
  //   event.preventDefault();

  //   const resultado = window.confirm(
  //     "Deseja realmente apagar o visitante " +
  //       visitor.name +
  //       "? Se fizer isto, as visitas deste visitante também serão apagadas."
  //   );
  //   if (resultado) {
  //     try {
  //       const id = visitor.id; // Supondo que visitor tenha uma propriedade id

  //       if (!id) {
  //         console.error("ID do visitante não encontrado.");
  //         return;
  //       }

  //       await deleteUser(id);
  //       // Adicione aqui a lógica desejada após a exclusão do usuário, se necessário
  //     } catch (error) {
  //       console.error("Erro ao excluir usuário:", error);
  //     }
  //     window.location.reload();
  //   }
  // };

  // const handleUpdateUser = async (event) => {
  //   event.preventDefault();

  //   const id = visitor.id; // Supondo que visitor tenha uma propriedade id

  //   if (!id) {
  //     console.error("ID do visitante não encontrado.");
  //     return;
  //   }

  //   try {
  //     await updateUser(id);
  //     // Adicione aqui a lógica desejada após a atualização do usuário, se necessário
  //   } catch (error) {
  //     console.error("Erro ao atualizar usuário:", error);
  //   }
  // };

  // const habilitarInput = (event) => {
  //   event.preventDefault();
  //   const infosDiv = document.getElementById("infos");
  //   const inputs = infosDiv.querySelectorAll("input");
  //   const attDados = document.getElementById("upuser");
  //   const gend = document.getElementById("generoUpdate");
  //   const d4 = document.getElementById("quadro");
  //   const d5 = document.getElementById("quadro2");
  //   const vt1 = document.getElementById("vt1");
  //   const vt2 = document.getElementById("vt2");

  //   gend.style.opacity = "1";
  //   gend.style.pointerEvents = "auto";

  //   attDados.style.opacity = "1";
  //   attDados.style.pointerEvents = "auto";
  //   attDados.style.cursor = "pointer";

  //   vt1.style.opacity = "1";
  //   vt1.style.transition = "0.5s";
  //   vt1.style.opacity = "0";

  //   vt2.innerHTML = "Editar Dados";

  //   d4.style.opacity = "1";
  //   d4.style.transition = "0.5s";
  //   d4.style.opacity = "0";
  //   d4.style.pointerEvents = "none";

  //   anime({
  //     targets: d5,
  //     duration: 200,
  //     easing: "linear",
  //     left: 0,
  //   });

  //   anime({
  //     targets: vt2,
  //     duration: 200,
  //     easing: "linear",
  //     left: 0,
  //   });

  //   for (const input of inputs) {
  //     input.disabled = false;
  //   }
  // };

  // useEffect(() => {
  //   console.log(visitor); // Isso será executado sempre que visitor mudar
  // }, [visitor]);

  return (
    <div className="body-Painel">
      <div className="header-Painel">
        <Header />
      </div>
      <div className="main-Painel">
        <div className="top-Section-Painel"></div>
        <div className="mid-Section-Painel">

          <Modal/>

          <Relatorios />

          <CadastrarVisitante />

          <AdicionarVisita />

          <AlterarVisitante />
        </div>
        <div className="bot-Section-Painel"></div>
      </div>
      <div className="footer-Painel">
        <Navbar />
      </div>
    </div>

    // <div className={style.content}>
    //   {/* <div className={style.dashboard}>
    //     <Relatorios onUserClick={handleClick} />
    //   </div> */}
    //   <div className={style.horizon} />

    //   <Relatorios />

    //   <CadastrarVisitante />

    //   <AdicionarVisita />

    //   <AlterarVisitante />

    //   <div className={style.body}>
    //     <h1>SEJA BEM-VINDO</h1>
    //   </div>
    //   <Navbar />
    // </div>
  );
}

export default Painel;
