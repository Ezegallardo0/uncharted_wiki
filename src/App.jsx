import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Inicio from './pages/home'
import Explorar from './pages/explorar'
import GameDetail from './pages/GameDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/explorar" element={<Explorar/>} />
        <Route path="/juego/:slug" element={<GameDetail/>} />
      </Routes>
    </>
  )
}

export default App
