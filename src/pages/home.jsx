import Card1 from "../components/C_uncharted1"
import Menu from "../components/nav"
import WidgetHome from "../components/WidgetHome"
import Footer from "../components/Footer"
import Colecciones from "../components/Colecciones"

const Inicio = () => {
  return (
    <div>
      <Menu />
      <div style={{ paddingTop: '70px' }}>
        <WidgetHome />
        <Card1 />
        <Footer />
        <Colecciones />
      </div>
    </div>
  )
}

export default Inicio
