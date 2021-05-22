import React from 'react'

const modalInstrucciones = ({cerrarModal}) => (
    <ul className='modal-instrucciones'>
      <p>
        Si apretas continuar serás llevado a un nueva página con una aplicación que posee mapas interactivos donde 
        es posible la ubicación y la concentración de elementos mayores y caudales de vertientes del area.
      </p>
      <button onClick={() => cerrarModal()}>Cerrar</button>
      <a href="https://mapa-em-caudales-vertientes.herokuapp.com/">
        <button>Continuar</button>
      </a>
    </ul>    
)  

export default modalInstrucciones;