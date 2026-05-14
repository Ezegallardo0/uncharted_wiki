import { Link } from "react-router-dom";
import "../styles/footer.css";
import { juegos } from "./juegos";

const Footer = () => {
  const featured = juegos[3] || juegos[0];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-title">Uncharted Wiki</p>
          <p className="footer-copy">
            Tu rincón para descubrir lore, reseñas y secretos de la saga Uncharted.
          </p>
          <ul className="footer-highlight">
            <li>Guías rápidas de cada entrega</li>
            <li>Personajes, coleccionables y mapas</li>
            <li>Curiosidades, easter eggs y teoría</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Enlaces rápidos</h4>
          <Link to="/explorar">Explorar la saga</Link>
          <Link to={`/juego/${featured.slug}`}>Análisis: {featured.title}</Link>
          <Link to="/juego/lost-legacy">The Lost Legacy</Link>
          <Link to="/">Inicio y novedades</Link>
        </div>

        <div className="footer-widget">
          <h4>¿Sabías qué?</h4>
          <span className="widget-badge">Curiosidad</span>
          <p className="widget-text">
            En la saga Uncharted hay más de 200 objetos coleccionables y secretos ocultos que solo los exploradores más atentos logran descubrir.
          </p>
          <p className="widget-small">Sigue explorando para encontrar guías, mapas y detalles exclusivos de cada entrega.</p>
        </div>
      </div>

      <div className="footer-base">
        <span>© 2026 Uncharted Wiki | <a className="jeg" href="https://ezegallardo0.github.io/PortFolio/">J. Ezequiel Gallardo</a></span>
        <span>Hecho para fans con un estilo moderno y accesible.</span>
      </div>
    </footer>
  );
};

export default Footer;
