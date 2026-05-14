import { colecciones } from './trofeos.js'
import { getTrophyStyle, getTrophyEmoji, getTrophyImage } from '../utils/trophyUtils.js'

const Colecciones = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
      {colecciones.map((game, idx) => (
        <div key={idx} style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '3px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
            {game.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {game.trophies.map((trophy, tIdx) => {
              const trophyStyle = getTrophyStyle(trophy.type)
              const trophyImage = getTrophyImage(trophy.type)
              return (
                <div 
                  key={tIdx} 
                  style={{ 
                    padding: '15px', 
                    backgroundColor: trophyStyle.backgroundColor,
                    border: trophyStyle.border,
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {trophyImage && (
                    <img 
                      src={trophyImage} 
                      alt={`${trophy.type} Trophy`}
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        marginBottom: '10px',
                        borderRadius: '4px',
                        objectFit: 'contain',
                      }}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{getTrophyEmoji(trophy.type)}</span>
                  </div>
                  <h4 style={{ margin: '0 0 5px 0', color: trophyStyle.color, fontSize: '0.95em' }}>
                    {trophy.name}
                  </h4>
                  {trophy.type && (
                    <p style={{ fontSize: '0.75em', color: trophyStyle.color, margin: '3px 0', fontWeight: 'bold', textTransform: 'uppercase' }}>
                      {trophy.type}
                    </p>
                  )}
                  <p style={{ fontSize: '0.8em', color: '#555', margin: '8px 0 0 0', lineHeight: '1.3' }}>
                    {trophy.requirement}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Colecciones