import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Inicio from './pages/home'
import GameDetail from './pages/GameDetail'
import Card1 from './components/C_uncharted1'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/explorar" element={<Card1/>} />
        <Route path="/juego/:slug" element={<GameDetail/>} />
      </Routes>
    </>
  )
}

export default App
