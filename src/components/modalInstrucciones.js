import React from 'react'

const modalInstrucciones = ({cerrarModal}) => (
    <ul className='modal-instrucciones'>
      <li>Haz zoom con la rueda del ratón o las flechas en pantalla.</li>
      <li>Haz click en cualquier parte del mapa para ver las coordenadas.</li>
      <li>Haz clic en los iconos azules para ver el nombre de la vertiente.</li>
      <li>Activa información adicional haciendo clic en el panel superior derecho.</li>
      <button onClick={() => cerrarModal()}>Cerrar</button>
    </ul>
    
    
)  

export default modalInstrucciones;