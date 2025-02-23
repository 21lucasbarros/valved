import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="rodape">
        <section className="rodape__conteudo">
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
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="Threads"
            >
              <i className="ri-threads-fill"></i>
            </a>
            <a
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="Twitter"
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="BlueSky"
            >
              <i className="ri-bluesky-fill"></i>
            </a>
            <a
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="Facebook"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="TikTok"
            >
              <i className="ri-tiktok-fill"></i>
            </a>
            <a
              href="#"
              className="rodape__conteudo__redes__rede"
              aria-label="YouTube"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </section>
          <section className="rodape__conteudo__frase">
            <p className="rodape__conteudo__frase__paragrafo">
              "A música é a linguagem universal da humanidade." — Leonard Cohen
            </p>
          </section>
          <section className="rodape__conteudo__copyright">
            <p>
              &copy; {new Date().getFullYear()} Valved. Todos os direitos
              reservados.
            </p>
          </section>
        </section>
      </footer>
    </>
  );
}
