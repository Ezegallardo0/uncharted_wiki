import "../styles/nav.css";
import { useState, useEffect } from "react";

const Menu = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const container = document.getElementById("container");
    if (!container) return;

    if (dark) {
      container.classList.add("dark-mode");
    } else {
      container.classList.remove("dark-mode");
    }
  }, [dark]);
  return (
    <div className="menu">
      <img
        src="https://www.pngarts.com/files/3/Uncharted-Logo-PNG-Image-Background.png"
        alt="logo_Un"
        className="img"
      />
      <div>
        <ul className="nav">
          <li>
            <a className="link-underline" href="">
              Inicio
            </a>
          </li>
          <li>
            <a className="link-underline" href="">
              Explorar
            </a>
          </li>

          <div className="dropdown">
            <a href="#" className="link-underline">
              Saga Uncharted
            </a>
            <div className="content">
              <a href="#">Uncharted: El tesoro de Drake</a>
              <a href="#">Uncharted 2: El reino de los ladrones</a>
              <a href="#">Uncharted 3: La traición de Drake</a>
              <a href="#">Uncharted 4: El desenlace del ladrón</a>
              <a href="#">Uncharted: El legado perdido</a>
            </div>
          </div>
          <li>
            <a className="link-underline" href="">
              Comprar
            </a>
          </li>
          <div className="container" id="container">
            <button onClick={() => setDark(!dark)}>
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
                  1
                </svg>
              )}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
