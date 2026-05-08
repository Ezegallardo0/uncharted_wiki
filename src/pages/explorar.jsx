import { Link } from "react-router-dom";
import Menu from "../components/nav";
import Footer from "../components/Footer";
import { juegos } from "../components/juegos";
import "../styles/explorar.css";

const Explorar = () => {
  return (
    <div className="explorar-page">
      <Menu />

      <section className="explorar-hero">
        <div className="hero-copy">
          <span>Explora la saga</span>
          <h1>Viaja por ruinas, selvas y fortalezas legendarias.</h1>
          <p>
            Descubre cada aventura de Uncharted con rutas de exploración, secretos ocultos y
            misiones épicas que revelan el corazón de la leyenda.
          </p>
          <div className="hero-actions">
            <Link className="hero-button" to="/juego/drakes-fortune">
              Empezar expedición
            </Link>
            <Link className="hero-link" to="/juego/a-thiefs-end">
              Más sobre A Thief's End
            </Link>
          </div>
        </div>
        <div className="hero-banner">
        </div>
      </section>

      <section className="explorar-topics">
        <div className="topic-card">
          <h2>Tesoros perdidos</h2>
          <p>Conoce los artefactos más codiciados y las leyendas que los protegen.</p>
        </div>
        <div className="topic-card">
          <h2>Rutas peligrosas</h2>
          <p>Explora las zonas más icónicas: selvas, desiertos, islas y fortalezas olvidadas.</p>
        </div>
        <div className="topic-card">
          <h2>Héroes y rivales</h2>
          <p>Descubre los personajes que hacen grande cada historia.</p>
        </div>
      </section>

      <section className="explorar-grid">
        <header className="grid-header">
          <div>
            <span>Elige un destino</span>
            <h2>Ruta de juego y recuerdos de cada entrega</h2>
          </div>
          <p>
            Selecciona una aventura para visitar su página de detalle, ver sus puntos clave y sumergirte en la
            atmósfera de cada capítulo.
          </p>
        </header>

        <div className="cards-wrap">
          {juegos.map((juego) => (
            <article className="explorar-card" key={juego.slug}>
              <img src={juego.img1} alt={juego.title} loading="lazy" />
              <div className="card-info">
                <h3>{juego.title}</h3>
                <p>{juego.descripcion}</p>
                <Link className="card-link" to={`/juego/${juego.slug}`}>
                  Ver detalle
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explorar;
