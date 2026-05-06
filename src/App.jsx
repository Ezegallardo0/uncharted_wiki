import {Route, Routes} from 'react-router-dom'
import './styles/App.css'
import Inicio from './pages/home'

function App() {

  return (
    <>
    <Routes>
      <Route  path="/" element={<Inicio/>} />
    </Routes>
    </>
  )
}

export default App
