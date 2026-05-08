import { Link } from "react-router-dom";
import "../styles/widget.css";
import { juegos } from "./juegos";

const WidgetHome = () => {
  const featured = juegos[1] || juegos[0];

  return (
    <section className="home-widget">
      <div className="home-widget-card">
        <div className="home-widget-copy">
          <span>Recomendado del día</span>
          <h3>Descubre {featured.title}</h3>
          <p>{featured.reviewSummary}</p>
          <div className="home-widget-meta">
            <span>Año {featured.year}</span>
            <span>{featured.genero}</span>
          </div>
        </div>
        <Link className="home-widget-cta" to={`/juego/${featured.slug}`}>
          Ver detalle
        </Link>
      </div>
    </section>
  );
};

export default WidgetHome;
