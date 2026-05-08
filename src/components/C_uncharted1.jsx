import "../styles/card1.css";
import { Link } from "react-router-dom";
import { juegos } from '../components/juegos';

const Card1 = () => {
  return (
    <div className="main-card">
      <h1>Uncharted Saga</h1>
      <div className="cards-container">
        {juegos.map((juego, index) => (
          <article key={index} className="card">
            <div className="card-copy">
              <h2>{juego.title}</h2>
              <p>{juego.descripcion}</p>
              <div className="card-meta">
                <span><strong>Año:</strong> {juego.year}</span>
                <span><strong>Plataforma:</strong> {juego.plataforma}</span>
                <span><strong>Género:</strong> {juego.genero}</span>
              </div>
              <p className="card-review">"{juego.cardReview}"</p>
              <Link className="card-link" to={`/juego/${juego.slug}`}>
                Más información
              </Link>
            </div>
            <div className="card-image-wrapper">
              <img src={juego.img} alt={juego.title} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Card1;
