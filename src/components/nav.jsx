import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { juegos } from "./juegos";
import PlaystationIcon from "../icons/playstation-svgrepo-com.svg";
import SteamIcon from "../icons/steam-svgrepo-com.png";
import NathanDrakeCollection from "../icons/ry4VLjdf1G2u47FcmJtgVsFq.avif";
import LegacyThievesCollection from "../icons/B3Xbu6aW10scvc4SE7yXA1lZ.avif";

const Menu = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("uncharted-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [platformChoice, setPlatformChoice] = useState("none");

  const closeBuyModal = () => {
    setBuyOpen(false);
    setPlatformChoice("none");
  };

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
            <button
              type="button"
              className="link-underline buy-link"
              onClick={() => {
                setMenuOpen(false);
                setPlatformChoice("none");
                setBuyOpen(true);
              }}
            >
              Comprar
            </button>
          </li>
        </ul>
        <div className="mobile-theme-toggle">
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

      {buyOpen ? (
        <div className="buy-modal-overlay" onClick={closeBuyModal}>
          <div className="buy-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={closeBuyModal} aria-label="Cerrar modal">
              ×
            </button>
            <div className="modal-head">
              <span>Comprar Uncharted</span>
              <h3>Elige tu tienda favorita</h3>
              <p>Compra el juego por PlayStation Store o Steam. Te llevamos directo a la mejor experiencia.</p>
            </div>
            <div className="buy-actions">
              {platformChoice === "playstation" ? (
                <>
                  <button
                    type="button"
                    className="buy-option back-button"
                    onClick={() => setPlatformChoice("none")}
                  >
                    ← Volver
                  </button>
                  <div className="game-choices">
                    <a
                      className="buy-option game-option"
                      href="https://store.playstation.com/es-ar/product/UP9000-CUSA02320_00-UNCHARTEDTRILOGY"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon ps-icon" aria-hidden="true">
                        <img className="Uc" src={NathanDrakeCollection} alt="Uncharted The Nathan Drake Collection" />
                      </span>
                      <div>
                        <strong>Uncharted The Nathan Drake Collection</strong>
                        <small>Juega la colección remasterizada completa con gráficos 4K y contenido adicional</small>
                      </div>
                    </a>
                    <a
                      className="buy-option game-option"
                      href="https://store.playstation.com/es-ar/product/UP9000-PPSA05389_00-UNCHARTED4R00000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon ps-icon" aria-hidden="true">
                        <img className="Uc" src={LegacyThievesCollection} alt="Uncharted: Colección Legado de Ladrones" />
                      </span>
                      <div>
                        <strong>Uncharted: Colección Legado de Ladrones</strong>
                        <small>Disfruta de Uncharted 4 y Lost Legacy en una experiencia remasterizada inolvidable</small>
                      </div>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="buy-option"
                    onClick={() => setPlatformChoice("playstation")}
                  >
                    <span className="icon ps-icon" aria-hidden="true">
                      <img src={PlaystationIcon} alt="PlayStation" className="svg-icon" />
                    </span>
                    <div>
                      <strong>PlayStation Store</strong>
                      <small>Descarga oficial para consola</small>
                    </div>
                  </button>
                  <a
                    className="buy-option"
                    href="https://store.steampowered.com/app/1659420/UNCHARTED_Coleccin_Legado_de_ladrones/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon steam-icon" aria-hidden="true">
                      <img src={SteamIcon} alt="Steam" className="svg-icon" />
                    </span>
                    <div>
                      <strong>Steam</strong>
                      <small>Versión para PC con comunidad Steam</small>
                    </div>
                  </a>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="cancel-buy" onClick={closeBuyModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Menu;
