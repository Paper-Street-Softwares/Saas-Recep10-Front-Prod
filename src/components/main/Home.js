import inputstyle from "../../css/structure/input.css";
import style from "../../css/main/home.css";

function Home() {
  return (
    <div className="main-Home">
      <img src="https://recepcao10.up.railway.app/assets/images/about/about-image.svg" />
      <p className="titles-Global">
        Recepção Nota 10 - Agora seus visitantes se tornarão membros ativos!
      </p>
      <p className="text-Home">
        Bem-vindo ao Recepção Nota 10! Estamos felizes por tê-lo conosco.
        Explore todas as facilidades e sinta-se à vontade. Curta sua estadia!
      </p>
      <p className="titles-Global">Suporte</p>
      <p className="text-Home">
        Caso precisa entrar em contato conosco para reportar alguma dificuldade
        no uso do sistema ou para qualquer tipo de ajuda,&nbsp;
        <a id="links-Home" href="https://wa.me/5561992781077">
          clique aqui.
        </a>
      </p>
      {/* <p className="titles-Global">Como tratamos os dados armazenados aqui?</p>
      <p className="text-Home">
        Política de privacidade | Termos de uso | LGPD
      </p> */}
    </div>
  );
}

export default Home;
