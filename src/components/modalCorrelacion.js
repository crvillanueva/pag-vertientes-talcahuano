import * as React from 'react'

const modalInstrucciones = ({cerrarModal}) => (
    <ul className='modal-instrucciones'>
      <p>
        Si apretas continuar serás llevado a un nueva página con una aplicación interactiva que
        permite observar la correlacion química entre elementos. Estos datos fueron obtenidos 
        desde 12 muestras de aguas de vertientes.
      </p>
      <p>
        Para ver la ubicación de las muestras dirige a la aplicación 
        del cuadro de calidad y disponibilidad de agua. 
      </p>
      <button onClick={() => cerrarModal()}>Cerrar</button>
      <a href="https://vertientes-scatter-reg.herokuapp.com/">
        <button>Continuar</button>
      </a>
    </ul>    
)  

export default modalInstrucciones;