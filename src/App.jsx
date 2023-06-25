import './App.css'
import MiApi from './components/MiApi.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
      <h1>Sismos Chile</h1>
      <h2>Últimas 24 horas</h2>
      <MiApi></MiApi>
      <Footer line1="@sergiorioseco 2023" line2= "Todos los derechos reservados"></Footer>
    </>
  )
}

export default App
