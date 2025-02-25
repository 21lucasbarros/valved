import React, { useState } from "react";
import "./Header.css";

interface Artist {
  id: string;
  name: string;
}

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Artist[]>([]);

  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const termoPesquisa = e.target.value;
    setQuery(termoPesquisa);

    if (termoPesquisa.length > 1) {
      try {
        const response = await fetch(
          `https://musicbrainz.org/ws/2/artist/?query=${termoPesquisa}&fmt=json`
        );
        const data = await response.json();

        const normalizedQuery = normalizeString(termoPesquisa);

        const resultadosFiltrados = data.artists.filter((artist: Artist) =>
          normalizeString(artist.name).includes(normalizedQuery)
        );

        setResults(resultadosFiltrados || []);
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <header className="cabecalho">
      <section className="cabecalho__conteudo">
        <section className="cabecalho__conteudo__logo">
          <img
            src="./img/logo.png"
            alt="Logo"
            className="cabecalho__conteudo__logo__imagem"
          />
        </section>

        <section className="cabecalho__conteudo__centro">
          <ul className="cabecalho__conteudo__link">
            <li className="cabecalho__conteudo__link_links">
              <a href="#">MUSICAS</a>
            </li>
            <li className="cabecalho__conteudo__link_links">
              <a href="#">LISTAS</a>
            </li>
            <li className="cabecalho__conteudo__link_links">
              <a href="#">MEMBROS</a>
            </li>
          </ul>
        </section>

        <section className="cabecalho__conteudo__direita">
          <label htmlFor="buscar">
            <i className="ri-search-line"></i>
          </label>
          <input
            type="text"
            name="buscar"
            id="buscar"
            className="cabecalho__conteudo__search-bar"
            placeholder="Buscar artista ou banda"
            onChange={handleInputChange}
            value={query}
          />
          {results.length > 0 && (
            <ul className="search-results">
              {results.slice(0, 5).map((artist) => (
                <li key={artist.id} className="search-item">
                  {artist.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </header>
  );
}
