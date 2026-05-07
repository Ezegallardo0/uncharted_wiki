import "../styles/card1.css";

const Card1 = () => {
  return (
    <div className="uncharted-container">

      <div className="info">
        <h1>Uncharted: Drake's Fortune</h1>

        <p>
          El juego sigue a Nathan Drake, un cazatesoros que busca el
          legendario tesoro de Francis Drake y la mítica ciudad de El Dorado.
          Durante la aventura lo acompañan Elena Fisher y Victor Sullivan.
        </p>

        <h2>Ver más información →</h2>
      </div>

      <img
        src="https://static.wikia.nocookie.net/unchartedpedia/images/b/bd/Uncharted_1_portada.jpeg/revision/latest?cb=20211229031812&path-prefix=es"
        alt="Uncharted Drake's Fortune"
      />
    </div>
  );
};

export default Card1;