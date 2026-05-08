import { Link, useParams } from "react-router-dom";
import { juegos } from "../components/juegos";
import Menu from "../components/nav";
import Footer from "../components/Footer";
import "../styles/game.css";

const GameDetail = () => {
  const { slug } = useParams();
  const juego = juegos.find((item) => item.slug === slug);
  const currentIndex = juegos.findIndex((item) => item.slug === slug);
  const previousGame = currentIndex > 0 ? juegos[currentIndex - 1] : null;
  const nextGame = currentIndex < juegos.length - 1 ? juegos[currentIndex + 1] : null;

  if (!juego) {
    return (
      <div className="detail-page">
        <Menu />
        <main className="detail-page__content">
          <h2>Juego no encontrado</h2>
          <p>Lo sentimos, no se encontró la aventura solicitada.</p>
          <Link className="button-back" to="/">
            Volver al inicio
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Menu />
      <main className="detail-page__content">
        <div className="detail-header">
          <div className="detail-title">
            <span className="detail-tag">{juego.genero}</span>
            <h2>{juego.title}</h2>
            <p>{juego.descripcion}</p>
            <div className="detail-stats">
              <span><strong>Año:</strong> {juego.year}</span>
              <span><strong>Plataforma:</strong> {juego.plataforma}</span>
              <span><strong>Rating:</strong> {juego.rating} ⭐</span>
            </div>
            <p className="detail-summary">{juego.reviewSummary}</p>
            {juego.fullDescription.map((paragraph, index) => (
              <p key={index} className="detail-paragraph">{paragraph}</p>
            ))}
            <Link className="button-back" to="/">
              Volver a la saga
            </Link>
          </div>
          <div className="detail-hero-image">
            <img src={juego.img} alt={juego.title} />
          </div>
        </div>

        <section className="detail-entities">
          <article>
            <h3>Personajes principales</h3>
            <div className="entity-grid">
              {juego.personajes.map((personaje, index) => (
                <div key={index} className="entity-card">
                  <img src={personaje.image} alt={personaje.name} />
                  <div>
                    <strong>{personaje.name}</strong>
                    <p>{personaje.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3>Objetos importantes</h3>
            <div className="entity-grid">
              {juego.objetos.map((objeto, index) => (
                <div key={index} className="entity-card">
                  <img src={objeto.image} alt={objeto.name} />
                  <div>
                    <strong>{objeto.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3>Enemigos</h3>
            <div className="entity-grid">
              {juego.enemigos.map((enemy, index) => (
                <div key={index} className="entity-card">
                  <img src={enemy.image} alt={enemy.name} />
                  <div>
                    <strong>{enemy.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="community-section">
          <div className="section-heading">
            <h3>Fotos destacadas de la comunidad</h3>
            <p>Imágenes destacadas y momentos épicos compartidos por fans de la saga.</p>
          </div>
          <div className="community-grid">
            {juego.comunidad.map((item, index) => (
              <div key={index} className="community-card">
                <img src={item.img} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-heading">
            <h3>Reseñas</h3>
            <p>Opiniones destacadas sobre la experiencia del juego.</p>
          </div>
          <div className="reviews-grid">
            {juego.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <span className="review-author">{review.author}</span>
                <span className="review-score">{review.score}</span>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="detail-navigation">
        <div className="nav-buttons">
          {previousGame ? (
            <Link className="nav-button nav-prev" to={`/juego/${previousGame.slug}`}>
              ← {previousGame.title}
            </Link>
          ) : (
            <div className="nav-button nav-disabled"></div>
          )}
          
          <Link className="nav-home" to="/explorar">
            Volver a Explorar
          </Link>

          {nextGame ? (
            <Link className="nav-button nav-next" to={`/juego/${nextGame.slug}`}>
              {nextGame.title} →
            </Link>
          ) : (
            <div className="nav-button nav-disabled"></div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDetail;
