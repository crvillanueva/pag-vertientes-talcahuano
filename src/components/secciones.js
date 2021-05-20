import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import cuadroInfo from '../images/cuadro-info-vertientes.jpg'
import cuadroMapa from '../images/cuadro-mapa.jpg'
import cuadroGeologia from '../images/cuadro-geologia.jpg'
import cuadroCalidad from '../images/cuadro-calidad.jpg'
import cuadroCorrel from '../images/cuadro-correlacion.jpg'
import ModalMapas from '../components/modalMapas'
import ModalCorrelacion from '../components/modalCorrelacion'

const Secciones = () => {
    const [showModal1, setShow1] = useState(false);
    const [showModal2, setShow2] = useState(false);

    const cerrarModal1 = () => {
        setShow1(false);
    }
    const cerrarModal2 = () => {
        setShow2(false);
    }

    return (
        <div className="seccion-central">
            <div className="caja">
                <Link to="/informacion/">
                    <img src={cuadroInfo} alt="cuadro información vertientes"/>
                </Link>
            </div>
            <div className="caja">
                <Link to="/ubicacion/">
                    <img src={cuadroMapa} alt="cuadro mapa ubicacion"/>
                </Link>
            </div>
            <div className="caja">
                <Link to="/geologia/">
                    <img src={cuadroGeologia} alt="cuadro geologia del area"/>
                </Link>
            </div>
            <div className="caja">
                <img 
                 src={cuadroCalidad}
                 alt="cuadro app calidad y disponibilidad del agua"
                 onClick={() => setShow1(true)}
                 onKeyDown={() => setShow1(true)}
                />
            </div>
            <div className="caja">
                <img src={cuadroCorrel}
                 alt="cuadro app correlacion de elementos"
                 onClick={() => setShow2(true)}
                 onKeyDown={() => setShow2(true)}
                />
            </div>
            { showModal1 && <ModalMapas cerrarModal={cerrarModal1}/> }
            { showModal2 && <ModalCorrelacion cerrarModal={cerrarModal2}/> }
        </div>
)}

export default Secciones;

