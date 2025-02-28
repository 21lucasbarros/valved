import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="rodape">
        <section className="rodape__conteudo">
          <section className="rodape__conteudo__coluna">
            <section className="rodape__conteudo__logo">
              <i className="ri-music-2-line" />
              <h2>Valved</h2>
            </section>
            <p className="rodape__conteudo__descricao">
              A plataforma definitiva para descobrir, avaliar e compartilhar
              suas músicas favoritas.
            </p>
            <section className="rodape__conteudo__redes">
              <a
                href="https://www.instagram.com/valvedofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.threads.com/21lucasbarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="Threads"
              >
                <i className="ri-threads-fill"></i>
              </a>
              <a
                href="https://www.x.com/21lucasbarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="X"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://www.bluesky.com/21lucasbarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="BlueSky"
              >
                <i className="ri-bluesky-fill"></i>
              </a>
              <a
                href="https://www.facebook.com/lucasbarrossimon/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="Facebook"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a
                href="https://www.tiktok.com/@weacked/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="TikTok"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/@21lucasbarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="rodape__conteudo__redes__rede"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </section>
          </section>

          <section className="rodape__conteudo__coluna">
            <h3 className="rodape__conteudo__titulo">Navegação</h3>
            <ul className="rodape__conteudo__lista">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Músicas</a>
              </li>
              <li>
                <a href="#">Listas</a>
              </li>
              <li>
                <a href="#">Membros</a>
              </li>
            </ul>
          </section>

          <section className="rodape__conteudo__coluna">
            <h3 className="rodape__conteudo__titulo">Recursos</h3>
            <ul className="rodape__conteudo__lista">
              <li>
                <a href="#">Acompanhe suas músicas</a>
              </li>
              <li>
                <a href="#">Demonstre seu amor</a>
              </li>
              <li>
                <a href="#">Escreva e compartilhe</a>
              </li>
              <li>
                <a href="#">Avalie músicas e álbuns</a>
              </li>
              <li>
                <a href="#">Registre sua jornada</a>
              </li>
              <li>
                <a href="#">Crie suas listas</a>
              </li>
            </ul>
          </section>

          <section className="rodape__conteudo__coluna">
            <h3 className="rodape__conteudo__titulo">Suporte</h3>
            <ul className="rodape__conteudo__lista">
              <li>
                <a href="#">Ajuda</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
            </ul>
          </section>
        </section>

        <section className="rodape__direitos">
          <p className="rodape__direitos__frase">
            "A música é a linguagem universal da humanidade." — Leonard Cohen
          </p>
          <p className="rodape__direitos__copyright">
            &copy; {new Date().getFullYear()} Valved. Todos os direitos
            reservados.
          </p>
        </section>
      </footer>
    </>
  );
}
