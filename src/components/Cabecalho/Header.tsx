import "./Header.css";

export default function Header() {
  return (
    <header className="cabecalho">
      <section className="cabecalho__conteudo">
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

        {/* <button className="cabecalho__conteudo__botao">
          <i className="ri-add-fill"></i>
          LOG
        </button> */}
      </section>
    </header>
  );
}
