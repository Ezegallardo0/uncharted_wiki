import "../styles/card1.css";
import { juegos } from '../components/juegos';

const Card1 = () => {
  return (
    <div className="main-card">
      <h1>Uncharted Saga</h1>
      <div className="cards-container">
        {juegos.map((juego, index) =>(
          <div key={index} className="card">
            <h2>{juego.title}</h2>
            <p>{juego.descripcion}</p>
            <img src={juego.img} alt={juego.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
