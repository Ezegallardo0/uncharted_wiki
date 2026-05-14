import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/widget.css";

import { juegos } from "./juegos";
import Search from "./buscador";

const WidgetHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = juegos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % juegos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + juegos.length) % juegos.length);
  };

  return (
    <section className="home-widget">
      <div className="carousel-showcase">
        <button className="carousel-btn carousel-btn-prev" onClick={handlePrev}>
          ←
        </button>
        
        <div className="carousel-image-container">
          <img 
            src={featured.img1 || featured.img} 
            alt={featured.title}
            className="carousel-featured-image"
          />
          <Link 
            className="carousel-overlay-link" 
            to={`/juego/${featured.slug}`}
            title={featured.title}
          />
        </div>

        <button className="carousel-btn carousel-btn-next" onClick={handleNext}>
          →
        </button>
      </div>

      <div className="carousel-indicators">
        {juegos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a ${juegos[index].title}`}
          ></button>
        ))}
      </div>
      <Search />
    </section>
    
  );
};

export default WidgetHome;
