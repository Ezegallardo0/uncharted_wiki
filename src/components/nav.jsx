import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { juegos } from "./juegos";

const Menu = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("uncharted-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("uncharted-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className={`menu ${menuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
        <img
          src="https://www.pngarts.com/files/3/Uncharted-Logo-PNG-Image-Background.png"
          alt="logo_Un"
          className="img"
        />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => {
          if (menuOpen) {
            setDropdownOpen(false);
          }
          setMenuOpen((prev) => !prev);
        }}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link className="link-underline" to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link-underline" to="/explorar" onClick={() => setMenuOpen(false)}>
              Explorar
            </Link>
          </li>
          <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <button
              className="dropbtn"
              type="button"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Saga Uncharted
            </button>
            <div className="content">
              {juegos.map((juego) => (
                <Link
                  key={juego.slug}
                  to={`/juego/${juego.slug}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {juego.title}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link className="link-underline" to="/" onClick={() => setMenuOpen(false)}>
              Comprar
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <button className="Tema" onClick={() => setDark((prev) => !prev)}>
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Menu;
