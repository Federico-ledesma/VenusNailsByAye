import { useEffect } from "react";

import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";




import '../Css/1-inicio.css'
import '../Css/2-servicios-principales.css'
import '../Css/3-galeria-destacada.css'
import '../Css/4-opiniones.css'
import Opinion from '../img/op1.png'
import '../Css/5-sobre-mi.css'
import Avatar from '../img/Avatar2.jpg'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { HiArrowUpCircle } from "react-icons/hi2";
import '../Css/6-ubicacion.css'




function Inicio() {

    useEffect(() => {
    AOS.init({
      duration: 200, // duración por defecto
      once: false,     // animar solo una vez
    });
  }, []);


  

  

    return(
        <>

        <a
          href="#home"
          className="flecha"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <HiArrowUpCircle size={40} />
        </a>

        

            

            <div  className='inicio-contenedor'>
                
                <h1  className='inicio-titulo'>"Realiza tu belleza con uñas perfectas"</h1>
                
                <div className='boton-contenedor'>
                    <button data-aos="fade-up" className='inicio-boton'>
                        <Link to="/servicios" className='link-galeria'>Servicios</Link>
                    </button>
                
                    <button data-aos="fade-up" className='inicio-boton'>
                        <a className='inicio-enlace' href="#">Reservar Turno</a>
                    </button>
                </div>
                
            </div>

            <h2  data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" id='servicios' className='servicios-titulo'>Servicios Principales</h2>

            <div className='box-contenedor'>

                <div data-aos="zoom-in" data-aos-delay="0" className='box'>
                
                </div>

                <div data-aos="zoom-in" data-aos-delay="0" className='box'>
                
                </div>

                <div data-aos="zoom-in" data-aos-delay="0" className='box'>
                
                </div>

                
            </div>
            
            <div className='boton-contenedor'>
                <button className='servicio-boton'>
                    <Link to="/servicios" className='servicio-enlace'>Ver Todos los Servicios</Link>
                </button>
            </div>

            
            

            <h3 id='galeria' className='galeria-titulo'>Galeria Destacada</h3>

               <div className="grid">
                  <div data-aos="zoom-in-up" className="item item-0">0</div>
                  <div data-aos="zoom-in-down" className="item item-1">1</div>
                  <div data-aos="zoom-in-up" className="item item-2">2</div>
                  <div data-aos="zoom-in-down" className="item item-3">3</div>
                  <div data-aos="zoom-in-up" className="item item-4">4</div>
                  <div data-aos="zoom-in-down" className="item item-5">5</div>
              </div>

            <div className='boton-contenedor'>
              <button className='servicio-boton'>
                <Link to="/galeria" className='servicio-enlace'>Ver Galeria Completa</Link>
              </button>
            </div>

            <h4 id='testimonios' className='opiniones-titulo'>Opiniones De Clientas</h4>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <img src={Opinion} className="opinion" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={Opinion} className="opinion" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={Opinion} className="opinion" alt="..."/>
                  </div>
                </div>

                <div className='opiniones-boton-contenedor'>
                  <button className="btn btn-outline-secondary btn-sm" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="btn btn-outline-secondary btn-sm" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

            </div>

             <h5 id='nosotros' className="sobremi-titulo">Sobre Mí</h5>

            <div className="sobremi">
                <div className="sobremi-contenedor">
                    <img className="sobremi-img" src={Avatar} alt="Avatar de Aye" />
                    <h6 className="sobremi-presentacion-titulo">Hola, soy Aye</h6>
                    <p className="sobremi-presentacion">
                        Especialista en uñas esculpidas y diseño personalizado. Mi pasión es ayudarte a lucir tus manos como una verdadera obra de arte. Me encanta cuidar cada detalle, escuchar lo que te gusta y crear diseños únicos que reflejen tu estilo. Trabajo con productos de calidad y siempre busco que cada cliente se sienta cómoda, relajada y feliz con el resultado. ¡Gracias por confiar en mí para embellecer tus manos!
                    </p>
                </div>
            </div>

            <h6 id='contacto' className='titulo-ubicacion'>Ubicación y Contacto</h6>

            <div className='mapa-contenedor'>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26315.95435121521!2d-58.656562908171885!3d-34.46498291782133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3630ce51b53%3A0x6cb44ad91aa47d6c!2sEl%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1754085079778!5m2!1ses!2sar"
                        width="300"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className='iconos-contenedor'>
                  <a href='https://www.instagram.com/venusnailsbyaye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='blank'>
                    <FaInstagram size={35} />
                  </a>
                  
                  <a href="https://api.whatsapp.com/" target="_blank">
                    <FaWhatsapp size={35} />
                  </a>

                  <a href="https://mail.google.com/mail" target='blank'>
                    <FaEnvelope size={35} />
                  </a>

                </div>
            </div>

            <div className='ubicacion-boton-contenedor'>
                <button className='ubicacion-boton'>Reservar Turno</button>
            </div>
        </>
    )
    
}

export default Inicio

