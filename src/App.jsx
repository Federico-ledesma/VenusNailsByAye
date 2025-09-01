import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./Components/0-NavBar"
import Inicio from "./Components/1-inicio"
import './Css/main.css'

import ServicioRoute from "./routes/servicios-route"
import GaleriaRoute from './routes/galeria-route'
import SobreMi from './routes/sobremi-route'

// Este componente hace scroll al top cada vez que cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  )
}

export default App;