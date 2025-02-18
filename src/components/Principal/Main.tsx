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
            BEM-VINDO AO <span>VALVED</span>
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
    </>
  );
}
