import '../routes-css/sobremi-route.css'

import { HiArrowUpCircle } from "react-icons/hi2";


import { Link } from 'react-router-dom'

import Avatar from '../img/Avatar2.jpg'

import foto1 from '../img/foto1.webp'
import foto2 from '../img/foto2.webp'
import foto3 from '../img/foto3.jpeg'
import foto4 from '../img/foto4.webp'
import foto5 from '../img/foto5.webp'


function SobreMi() {

    return(
        <div className='fondo-sobremi'>

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
                
            <h1 className='titulo-sobremi'>"Sobre Mi"</h1>
            <h2 className='subtitulo-sobremi'>"Conoce quien esta detras de cada diseño"</h2>

            <div className='avatar-sobremi-contenedor'>
                <img className='avatar-sobremi' src={Avatar} alt="" title='Foto sobre mi'/>
            </div>

            <p className='descripcion-sobremi'>"Soy Aye, tecnica en uñas desde 2024. Me encanta el detalle y crear diseños unicos para cada clienta"</p>

            <div className='formacion-sobremi-contenedor'>
                <h3 className='titulo-formacion'>🎓 Formacion</h3>
                <ul className='formacion-sobremi'>
                    <li className='formacion'>✅ CURSO DE ESCULPIDAS</li>
                    <li className='formacion'>✅ NAIL ART AVANZADO</li>
                    <li className='formacion'>✅ CONSTANTE CAPACITACION</li>
                </ul>
            </div>

            <div className='diferencia-sobremi-contenedor'>
                <h3 className='titulo-diferencia'>💡¿Qué me diferencia?</h3>
                <ul className='diferencia-sobremi'>
                    <li className='diferencia'>✅ TRATO CERCANO</li>
                    <li className='diferencia'>✅ PRODUCTOS DE CALIDAD</li>
                    <li className='diferencia'>✅ ESTILO PROPIO</li>
                </ul>
            </div>


            <div className='imagen-sobremi-contenedor'>
              <div className='slider-track'>
                <img className='imagen-sobremi' src={foto1} alt="" />
                <img className='imagen-sobremi' src={foto2} alt="" />
                <img className='imagen-sobremi' src={foto3} alt="" />
                <img className='imagen-sobremi' src={foto4} alt="" />
                <img className='imagen-sobremi' src={foto5} alt="" />

                <img className='imagen-sobremi' src={foto1} alt="" />
                <img className='imagen-sobremi' src={foto2} alt="" />
                <img className='imagen-sobremi' src={foto3} alt="" />
                <img className='imagen-sobremi' src={foto4} alt="" />
                <img className='imagen-sobremi' src={foto5} alt="" />
              </div>
               
            </div>

            <div className='boton-sobremi-galeria-contenedor'>
                <button className='boton-sobremi-galeria'>
                    <Link to="/galeria" className='servicio-enlace'>Ver Galeria Completa</Link>
                </button>
            </div>

            <div className='agenda-contenedor'>
                <h4 className='titulo-agenda'>"Agenda tu turno y empeza a brillar"</h4>
                
                
            </div>


            <h5 className='titulo-preguntas'>Preguntas Frecuentes</h5>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     ¿Cómo cuido mis uñas después del turno? 
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Despues de tu servicio, segui estos consejos para que tus uñas se mantengan perfectas por mas tiempo: </p>
                    <ul>
                        <li>Evita usar tus uñas como herramientas (abrir envases, rascar, etc) </li>
                        <li>Usa guantes al lavar los platos o manipular productos de limpieza </li>
                        <li>Hidrata tus cuticulas todos los dias con aceite o crema </li>
                        <li>No arranques el esmaltado si comienza a levantarse, pedi un turno para retirarlo correctamente </li>
                        <li>Cuida los golpes: aunque el gel/semipermanente es resistente, un impacto fuerte puede quebrar la uña </li>
                        <li>Mantene tus manos limpias y secas para evitar hongos o infecciones</li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     ¿Qué servicio me conviene según mi estilo?   
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul>
                        <li>Si buscás algo natural y duradero 👉 Esmaltado Semipermanente 
                            Perfecto si te gusta mantener tus uñas prolijas sin cambiar tanto el largo.
                        </li>
                        
                        <li>Si querés fortalecer tus uñas naturales 👉 Kapping Gel
                            Ideal para quienes sienten que sus uñas se quiebran fácil pero no quieren mucho largo.
                        </li>

                        <li>Si te gusta experimentar con diseños y formas 👉 Soft Gel o Polygel
                            Te permite mayor creatividad y resistencia, con un acabado natural.
                        </li>
                        <li>Si amás las uñas largas y elegantes 👉 Esculpidas en Gel o Acrílico
                            Perfectas para un estilo glamoroso, con infinitas posibilidades en diseño.
                        </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     ¿Cada cuánto se recomienda el mantenimiento?    
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>El mantenimiento de tus uñas depende del servicio que elijas y de tu crecimiento natural:</p>
                    <ul>
                        <li>
                            Esmaltado semipermanente 👉 cada 2 a 3 semanas, para evitar que se levante o se descascare.
                        </li>
                        <li>
                            Kapping gel / Soft gel / Polygel 👉 cada 3 semanas, rellenando el crecimiento de la uña natural.
                        </li>
                        <li>
                            Esculpidas en gel o acrílico 👉 cada 3 a 4 semanas, según la velocidad de crecimiento y el cuidado diario.
                        </li>
                    </ul>
                    <p>💡 Si notás que una uña se levantó, no la arranques: pedí turno de mantenimiento para evitar quiebres o infecciones.</p>
                  </div>
                </div>
              </div>
            </div>


            
        </div>
    )







}


export default SobreMi