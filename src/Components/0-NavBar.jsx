import '../Css/0-navbar.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

/* function NavBar() {
    return( */

      export default function Navbar() {
        return (
          <nav id='home' className="navbar navbar-expand-lg navbar-fondo">
            <div className="container-fluid">
              <img className='logo-img' src={logo}/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-flex">
                  <li className="nav-item">
                    <Link to="/" className='white'>Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/servicios" className='white'>Servicios</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/galeria" className='white'>Galeria</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Sobremi" className='white'>Sobre Mi</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

        )
      }







      































