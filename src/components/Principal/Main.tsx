import "./Main.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Main() {
  const [text] = useTypewriter({
    words: ["Descubra", "Avalie", "Compartilhe"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <main className="principal">
        <video autoPlay loop muted className="principal__video-bg">
          <source src="./img/background2.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <section className="principal__conteudo">
          <h1 className="principal__conteudo__titulo">
            BEM-VINDO AO <span>Valved</span>
          </h1>
          <p className="principal__conteudo__paragrafo">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#111111" /> suas músicas
            favoritas.
          </p>
          <a
            href="https://www.instagram.com/21lucasbarros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="principal__conteudo__botao">
              Comece de graça - Crie sua conta!
            </button>
          </a>
        </section>
      </main>

      <section className="principais-albuns">
        <section className="principais-albuns__conteudo">
          <h2 className="principais-albuns__conteudo__titulo">
            E O GRAMMY VAI PARA...
          </h2>
          <div className="faixa"></div>
          <section className="principais-albuns__conteudo__lista">
            <img
              src="./img/albuns/californication.png"
              alt="Californication - Red Hot Chili Peppers"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/man-on-the-moon.png"
              alt="Man on the Moon - Kid Cudi"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/sour.png"
              alt="Sour - Olivia Rodrigo"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/lover.png"
              alt="Lover - Taylor Swift"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/dark-side-of-the-moon.png"
              alt="Dark Side of the-Moon - Pink Floyd"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/blonde.png"
              alt="Blonde - Frank Ocean"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/happier-than-ever.png"
              alt="Happier Than Ever - Billie Eilish"
              className="principais-albuns-card"
            />
            <img
              src="./img/albuns/timbu.png"
              alt="MC Timbu"
              className="principais-albuns-card"
            />
          </section>
        </section>
      </section>
    </>
  );
}
