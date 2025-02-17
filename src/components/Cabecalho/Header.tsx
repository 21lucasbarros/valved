import "./Header.css";

export default function Header() {
  return (
    <header className="cabecalho">
      <section className="cabecalho__conteudo">
        <section className="cabecalho__conteudo__logo">
          <img
            src="./img/logo.png"
            alt="Logo Barcelona"
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
          <label htmlFor="buscar">
            <i className="ri-search-line"></i>
          </label>
          <input
            type="text"
            name="buscar"
            id="buscar"
            className="cabecalho__conteudo__search-bar"
            placeholder="Buscar"
          />
        </section>
      </section>
    </header>
  );
}
