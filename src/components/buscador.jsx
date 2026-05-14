import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { juegos } from './juegos';
import '../styles/buscador.css'

const Search = () => {
    const navigate = useNavigate()
    const[busqueda, setBusqueda] = useState("");
    const resultados = juegos.filter((juego) =>
    juego.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    juego.descripcion.toLowerCase().includes(busqueda.toLowerCase()))

    const handleSelectGame = (slug) => {
      navigate(`/juego/${slug}`)
      setBusqueda("")
    }

  return (
     <div className="search-container">
      <input
        type="text"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />

      {busqueda && (
        <div className="search-results">
          {resultados.length === 0 ? (
            <p className="no-results">No se encontraron resultados</p>
          ) : (
            resultados.map((juego, index) => (
              <div 
                key={juego.slug} 
                className="result-item" 
                onClick={() => handleSelectGame(juego.slug)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={juego.img} alt={juego.title} className="result-image" />
                <div className="result-content">
                  <h3>{juego.title}</h3>
                  <p className="result-year">{juego.year}</p>
                  <p className="result-genre">{juego.genero}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Search