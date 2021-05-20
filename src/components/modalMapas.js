import * as React from 'react'

const modalInstrucciones = ({cerrarModal}) => (
    <ul className='modal-instrucciones'>
      <p>
        Si apretas continuar seras llevado a un nueva página con una aplicación que posee mapas interactivos, los
         cuales permite observar los elementos mayores y los caudales de vertientes del area.
      </p>
      <button onClick={() => cerrarModal()}>Cerrar</button>
      <a href="https://mapa-em-caudales-vertientes.herokuapp.com/">
        <button>Continuar</button>
      </a>
    </ul>    
)  

export default modalInstrucciones;