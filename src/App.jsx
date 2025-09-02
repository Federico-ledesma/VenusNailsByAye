import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";





import Inicio from "./Components/1-inicio"
import './Css/main.css'

import Layout from "./Components/Layout";


import ServicioRoute from "./routes/servicios-route"
import GaleriaRoute from './routes/galeria-route'
import SobreMi from './routes/sobremi-route'

import NavBar from "./Components/0-NavBar";

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

      <Layout>
      <ScrollToTop />
      
      <main className="bg">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<ServicioRoute />} />
          <Route path="/galeria" element={<GaleriaRoute />} />
          <Route path="/Sobremi" element={<SobreMi />} />
        </Routes>
      </main>
      </Layout>
    </Router>
  )
}

export default App;