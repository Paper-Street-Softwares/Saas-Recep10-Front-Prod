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
        Bem-vindo ao nosso aplicativo de recepção de visitantes! Explore
        facilmente horários de serviço, encontre informações sobre funcionamento
        e descubra eventos especiais. Estamos animados para recebê-lo!
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
