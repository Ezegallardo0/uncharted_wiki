import "../styles/card1.css";
import Menu from "./nav";
import { Link } from "react-router-dom";
import { juegos } from '../components/juegos';
import { useState, useCallback, memo } from "react";

const GameCard = memo(({ juego, isActive, onClick }) => (
  <div className={`game-showcase ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="showcase-image">
      <img 
        src={juego.img2} 
        alt={juego.title}
        loading="lazy"
        decoding="async"
      />
      <div className="image-overlay" />
    </div>
    <div className="showcase-info">
      <span className="game-year">{juego.year}</span>
      <h2>{juego.title}</h2>
      <p className="game-description">{juego.descripcion}</p>
      <div className="game-specs">
        <div className="spec">
          <span className="spec-label">Plataforma</span>
          <span className="spec-value">{juego.plataforma}</span>
        </div>
        <div className="spec">
          <span className="spec-label">Género</span>
          <span className="spec-value">{juego.genero}</span>
        </div>
      </div>
      <p className="game-review">"{juego.cardReview}"</p>
      <Link className="game-btn" to={`/juego/${juego.slug}`}>
        Explorar completo
      </Link>
    </div>
  </div>
));

GameCard.displayName = 'GameCard';

const Card1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? juegos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === juegos.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="saga-explorer">
      <Menu />
      <header className="explorer-header">
        <div className="header-content">
          <h1>Uncharted Saga</h1>
          <p>Descubre todas las aventuras legendarias</p>
        </div>
      </header>

      <div className="explorer-carousel">
        <div className="carousel-container">
          <div className="showcase-wrapper">
            {juegos.map((juego, index) => (
              <GameCard
                key={juego.slug}
                juego={juego}
                isActive={index === activeIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button className="carousel-btn prev" onClick={goToPrevious} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-btn next" onClick={goToNext} aria-label="Siguiente">
            ❯
          </button>
        </div>

        <div className="carousel-indicators">
          {juegos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a juego ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <section className="games-grid">
        <h2>Todos los juegos</h2>
        <div className="grid-container">
          {juegos.map((juego) => (
            <div key={juego.slug} className="grid-card">
              <div className="grid-card-image">
                <img 
                  src={juego.img} 
                  alt={juego.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid-card-info">
                <h3>{juego.title}</h3>
                <span className="grid-year">{juego.year}</span>
                <Link to={`/juego/${juego.slug}`} className="grid-link">
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card1;
