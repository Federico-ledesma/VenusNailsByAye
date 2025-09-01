import { useEffect } from "react";
import { FaClock, FaRegMoneyBillAlt } from "react-icons/fa";

import '../routes-css/servicios-route.css'


function ServicioRoute() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
        <div className='servicios'>
            <h1 className='titulo-servicio'>Servicios Principales</h1>
            <h2 className='subtitulo-servicio'>"Elegi el estilo que mas se adapte a vos. Tus uñas, tu expresion"</h2>


        

        {/* ------------------------------------------ */}

      <div className='chau'>
        <div className='hola'>
        <h3 className='titulo-uña-servicio'>Esmaltado semipermanente</h3>
        
          <div className='img-servicio'></div> 
        
            

        <div className='contenedor'>

            <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#Esmaltadosemipermanente" role="button" aria-expanded="false" aria-controls="Esmaltadosemipermanente">
                Ver Mas
            </a>
            </p>
        </div>
        <div className="collapse" id="Esmaltadosemipermanente">
          <div className="card card-body">
            <h3 className='titulo-uña-servicio'>Esmaltado semipermanente</h3>
              <h4 className='subtitulo-uña-servicio'>Esmaltado semipermanente</h4>
                <p className='descripcion-uña-servicio'>El esmaltado semipermanente es una técnica de manicura en la que se aplica un esmalte especial que se endurece mediante luz LED o UV. Su fórmula combina características del esmalte tradicional y el gel, lo que permite una mayor duración sin perder el acabado brillante. Generalmente, puede mantenerse intacto entre dos y tres semanas, dependiendo del cuidado de las uñas.</p>
            
                <div className='contenedor-lista-servicio'>
                    <div>
                      <FaClock />
                      <span>120'</span>
                    </div>
                    
                    <div>
                      <FaRegMoneyBillAlt />
                      <span>9.000</span>        
                    </div>
                </div>
          </div>
        </div>
      </div>
        {/* ------------------------------------------ */}


      <div className='hola'>

      
        <h3 className='titulo-uña-servicio'>Kapping gel</h3>
        <div className='img-servicio2'></div> 
            

        <div className='contenedor'>

            <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#Kappinggel" role="button" aria-expanded="false" aria-controls="Kappinggel">
                Ver Mas
            </a>
            </p>
        </div>
        <div className="collapse" id="Kappinggel">
          <div className="card card-body">
            <h3 className='titulo-uña-servicio'>Kapping gel</h3>
              <h4 className='subtitulo-uña-servicio'>Kapping gel</h4>
                <p className='descripcion-uña-servicio'>El kapping gel es una técnica de manicura que consiste en recubrir la uña natural con una capa de gel constructor para protegerla y darle mayor resistencia. No alarga la uña, sino que refuerza su estructura, evitando quiebres y permitiendo mantener el largo natural por más tiempo. Se seca bajo lámpara LED o UV y puede combinarse con esmalte tradicional o semipermanente.</p>
            
                <div className='contenedor-lista-servicio'>
                    <div>
                      <FaClock />
                      <span>120'</span>
                    </div>
                    
                    <div>
                      <FaRegMoneyBillAlt />
                      <span>9.000</span>        
                    </div>       
                </div>
          </div>
        </div>
      </div>
      </div>
        {/* ------------------------------------------ */}

      <div className='chau'>
        <div className='hola'>
          <h3 className='titulo-uña-servicio'>Soft gel</h3>
        <div className='img-servicio3'></div> 
            

        <div className='contenedor'>

            <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#Softgel" role="button" aria-expanded="false" aria-controls="Softgel">
                Ver Mas
            </a>
            </p>
        </div>
        <div className="collapse" id="Softgel">
          <div className="card card-body">
            <h3 className='titulo-uña-servicio'>Soft gel</h3>
              <h4 className='subtitulo-uña-servicio'>Soft gel</h4>
                <p className='descripcion-uña-servicio'>El soft gel es un sistema de extensión de uñas que utiliza tips (extensiones) de gel preformados, diseñados para cubrir toda la uña natural. Se adhieren con gel y se curan bajo lámpara LED o UV, ofreciendo una superficie lisa y uniforme lista para esmaltar. Son más ligeros y flexibles que otros sistemas, lo que brinda mayor comodidad y un aspecto natural, además de permitir una aplicación rápida y segura para la uña.</p>
            
                <div className='contenedor-lista-servicio'>
                    <div>
                      <FaClock />
                      <span>120'</span>
                    </div>
                    
                    <div>
                      <FaRegMoneyBillAlt />
                      <span>9.000</span>        
                    </div>       
                </div>
          </div>
        </div>
        </div>
        

        {/* ------------------------------------------ */}

      <div className='hola'>
        <h3 className='titulo-uña-servicio'>Poly gel</h3>
        <div className='img-servicio4'></div> 
            

        <div className='contenedor'>

            <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#Polygel" role="button" aria-expanded="false" aria-controls="Polygel">
                Ver Mas
            </a>
            </p>
        </div>
        <div className="collapse" id="Polygel">
          <div className="card card-body">
            <h3 className='titulo-uña-servicio'>Poly gel</h3>
              <h4 className='subtitulo-uña-servicio'>Poly gel</h4>
                <p className='descripcion-uña-servicio'>El polygel es un material para construcción y esculpido de uñas que combina las propiedades del acrílico y el gel. Tiene una consistencia densa y moldeable, lo que permite trabajar la forma de la uña con precisión antes de curarlo bajo lámpara LED o UV. Es más ligero que el acrílico, pero más resistente que el gel tradicional, y se utiliza tanto para alargar como para reforzar la uña natural.</p>
            
                <div className='contenedor-lista-servicio'>
                    <div>
                      <FaClock />
                      <span>120'</span>
                    </div>
                    
                    <div>
                      <FaRegMoneyBillAlt />
                      <span>9.000</span>        
                    </div>        
                </div>
          </div>
        </div>
      </div>
        
      </div>
        

        {/* ------------------------------------------ */}

        <h3 className='titulo-uña-servicio'>Esculpidas</h3>
        <div className='img-servicio5'></div> 
            

        <div className='contenedor'>

            <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#Esculpidas" role="button" aria-expanded="false" aria-controls="Esculpidas">
                Ver Mas
            </a>
            </p>
        </div>
        <div className="collapse" id="Esculpidas">
          <div className="card card-body">
            <h3 className='titulo-uña-servicio'>Esculpidas</h3>
              <h4 className='subtitulo-uña-servicio'>Esculpidas</h4>
                <p className='descripcion-uña-servicio'>son extensiones artificiales hechas con una mezcla de polvo acrílico y líquido monómero, que se endurece al aire formando una capa resistente. Se usan para alargar la uña natural, reforzarla y permitir diseños decorativos duraderos. Requieren mantenimiento cada 2-3 semanas para rellenar el crecimiento y evitar desprendimientos.</p>
            
                <div className='contenedor-lista-servicio'>
                    <div>
                      <FaClock />
                      <span>120'</span>
                    </div>
                    
                    <div>
                      <FaRegMoneyBillAlt />
                      <span>9.000</span>        
                    </div>       
                </div>
          </div>
        </div>
        







        



       
        </div>
        
        
    )





}

export default ServicioRoute