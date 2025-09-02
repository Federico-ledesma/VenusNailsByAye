import '../routes-css/galeria-route.css'


import { useState } from "react";

import { HiArrowUpCircle } from "react-icons/hi2";


import Esculpidas1 from '../img/Uñas/Esculpidas1.jpg'
import Esculpidas2 from '../img/Uñas/Esculpidas2.jpg'
import Esculpidas3 from '../img/Uñas/Esculpidas3.jpg'
import Esculpidas4 from '../img/Uñas/Esculpidas4.jpg'

import Poly1 from '../img/Uñas/Poly1.jpg'
import Poly2 from '../img/Uñas/Poly2.jpg'
import Poly3 from '../img/Uñas/Poly3.jpg'

import Semi1 from '../img/Uñas/semi1.jpg'
import Semi2 from '../img/Uñas/semi2.jpg'
import Semi3 from '../img/Uñas/semi3.jpg'

import Soft1 from '../img/Uñas/Soft1.jpg'
import Soft2 from '../img/Uñas/Soft2.jpg'
import Soft3 from '../img/Uñas/Soft3.jpg'
import Soft4 from '../img/Uñas/Soft4.jpg'
import Soft5 from '../img/Uñas/Soft5.jpg'
import Soft6 from '../img/Uñas/Soft6.jpg'
import Soft7 from '../img/Uñas/Soft7.jpg'
import Soft8 from '../img/Uñas/Soft8.jpg'
import Soft9 from '../img/Uñas/Soft9.jpg'
import Soft10 from '../img/Uñas/Soft10.jpg'

function GaleriaRoute() {

    const imagenes = [
    { id: 1, src: Esculpidas1, categoria: "Esculpidas" },
    { id: 2, src: Esculpidas2, categoria: "Esculpidas" },
    { id: 3, src: Esculpidas3, categoria: "Esculpidas" },
    { id: 4, src: Esculpidas4, categoria: "Esculpidas" },

    { id: 6, src: Poly1, categoria: "Poly" },
    { id: 7, src: Poly2, categoria: "Poly" },
    { id: 8, src: Poly3, categoria: "Poly" },
    
    { id: 9, src: Semi1, categoria: "Semi" },
    { id: 10, src: Semi2, categoria: "Semi" },
    { id: 11, src: Semi3, categoria: "Semi" },

    { id: 12, src: Soft1, categoria: "Soft" },
    { id: 13, src: Soft2, categoria: "Soft" },
    { id: 14, src: Soft3, categoria: "Soft" },
    { id: 15, src: Soft4, categoria: "Soft" },
    { id: 16, src: Soft5, categoria: "Soft" },
    { id: 17, src: Soft6, categoria: "Soft" },
    { id: 18, src: Soft7, categoria: "Soft" },
    { id: 19, src: Soft8, categoria: "Soft" },
    { id: 20, src: Soft9, categoria: "Soft" },
    { id: 21, src: Soft10, categoria: "Soft" },
    

  ];

  const [categoria, setCategoria] = useState("todos");

  const filtrados = categoria === "todos"
    ? imagenes
    : imagenes.filter((img) => img.categoria === categoria);

     return (

        <div id='galeria-inicio' className='galeria'>

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

        <h1  className='titulo-galeria'>Galeria</h1>
        <h2>"Mira mis trabajitos"</h2>
        <div className="dropdown-center">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar por categoria
          </button>
          <ul className="dropdown-menu">
            <li className='gol'><button className='boton-galeria' onClick={() => setCategoria("todos")}>Todos</button></li>
            <li className='gol'><button className='boton-galeria' onClick={() => setCategoria("Esculpidas")}>Esculpidas</button></li>
            <li className='gol'><button className='boton-galeria' onClick={() => setCategoria("Poly")}>Poly gel</button></li>
            <li className='gol'><button className='boton-galeria' onClick={() => setCategoria("Semi")}>SemiPermanente</button></li>
            <li className='gol'><button className='boton-galeria' onClick={() => setCategoria("Soft")}>Soft gel</button></li>
          </ul>
        </div>







    <div>
      
      
      
     

      <div className='imagen-contenedor-galeria'>
        {filtrados.map((img) => (
          <img
          className='imagen'
            key={img.id}
            src={img.src}
            alt={img.categoria}
          />
          
        ))}
      </div>

      
    </div>
    </div>
    
  );






  
}

  


export default GaleriaRoute