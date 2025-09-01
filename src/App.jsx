import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route} from "react-router-dom"

import NavBar from "./Components/0-NavBar"
import Inicio from "./Components/1-inicio"
import './Css/main.css'

import ServicioRoute from "./routes/servicios-route"
import GaleriaRoute from './routes/galeria-route'
import SobreMi from './routes/sobremi-route'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <>
      <nav className="bg">
        <NavBar />
      </nav>
      <main className="bg">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<ServicioRoute />} />
          <Route path="/galeria" element={<GaleriaRoute />} />
          <Route path="/sobremi" element={<SobreMi />} />
        </Routes>
      </main>
    </>
  )
}

export default App
