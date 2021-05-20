import * as React from 'react'

const modalInstrucciones = ({cerrarModal}) => (
    <ul className='modal-instrucciones'>
      <p>
        Si apretas continuar seras llevado a un nueva página con una aplicación interactiva que
        permite observar la correlacion quimica entre elementos, a partir de datos obtenidos de
          12 muestras en la península de Tumbes.
      </p>
      <button onClick={() => cerrarModal()}>Cerrar</button>
      <a href="https://vertientes-scatter-reg.herokuapp.com/">
        <button>Continuar</button>
      </a>
    </ul>    
)  

export default modalInstrucciones;