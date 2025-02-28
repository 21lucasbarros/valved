import { useEffect, useState, useRef } from "react";
import "./Analytics.css";

export default function Analise() {
  const estatisticasRef = useRef<HTMLDivElement | null>(null);

  const [musicas, setMusicas] = useState(0);
  const [ouvintes, setOuvintes] = useState(0);
  const [avaliacoes, setAvaliacoes] = useState(0);
  const [artistas, setArtistas] = useState(0);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          animarNumeros();
          observador.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (estatisticasRef.current) {
      observador.observe(estatisticasRef.current);
    }

    return () => observador.disconnect();
  }, []);

  const animarNumeros = () => {
    const duracao = 5000;
    const intervaloTempo = 20;
    const passos = duracao / intervaloTempo;

    const animarValor = (
      definirEstado: React.Dispatch<React.SetStateAction<number>>,
      inicio: number,
      fim: number
    ) => {
      let atual = inicio;
      const incremento = (fim - inicio) / passos;

      const intervalo = setInterval(() => {
        atual += incremento;
        definirEstado(Math.floor(atual));

        if (atual >= fim) {
          definirEstado(fim);
          clearInterval(intervalo);
        }
      }, intervaloTempo);
    };

    animarValor(setMusicas, 0, 50);
    animarValor(setOuvintes, 0, 10);
    animarValor(setAvaliacoes, 0, 100);
    animarValor(setArtistas, 0, 5);
  };

  return (
    <section className="estatisticas" ref={estatisticasRef}>
      <div className="estatisticas__conteudo">
        <h2 className="estatisticas__conteudo__titulo">VALVED EM NÚMEROS</h2>
        <div className="estatisticas__conteudo__cards">
          <div className="estatistica-card">
            <i className="ri-music-2-line" />
            <h3 className="estatistica-card__numero">
              {musicas.toLocaleString()}M+
            </h3>
            <p className="estatistica-card__texto">Músicas</p>
          </div>
          <div className="estatistica-card">
            <i className="ri-headphone-line" />
            <h3 className="estatistica-card__numero">
              {ouvintes.toLocaleString()}M+
            </h3>
            <p className="estatistica-card__texto">Membros</p>
          </div>
          <div className="estatistica-card">
            <i className="ri-star-line" />
            <h3 className="estatistica-card__numero">
              {avaliacoes.toLocaleString()}M+
            </h3>
            <p className="estatistica-card__texto">Avaliações</p>
          </div>
          <div className="estatistica-card">
            <i className="ri-group-line" />
            <h3 className="estatistica-card__numero">
              {artistas.toLocaleString()}M+
            </h3>
            <p className="estatistica-card__texto">Artistas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
