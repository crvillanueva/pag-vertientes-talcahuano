import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
                    <StaticImage src="../images/cuadro-info-vertientes.jpg" alt="cuadro información vertientes"/>
                </Link>
            </div>
            <div className="caja">
                <Link to="/ubicacion/">
                    <StaticImage src="../images/cuadro-mapa.jpg" alt="cuadro mapa ubicacion"/>
                </Link>
            </div>
            <div className="caja">
                <Link to="/geologia/">
                    <StaticImage src="../images/cuadro-geologia.jpg" alt="cuadro geologia del area"/>
                </Link>
            </div>
            <div className="caja" onClick={() => setShow1(true)} onKeyDown={() => setShow1(true)}>
                <StaticImage 
                 src="../images/cuadro-calidad.jpg"
                 alt="cuadro app calidad y disponibilidad del agua"
                />
            </div>
            <div className="caja" onClick={() => setShow2(true)} onKeyDown={() => setShow2(true)}>
                <StaticImage 
                 src="../images/cuadro-correlacion.jpg"
                 alt="cuadro app correlacion de elementos"
                />
            </div>
            { showModal1 && <ModalMapas cerrarModal={cerrarModal1}/> }
            { showModal2 && <ModalCorrelacion cerrarModal={cerrarModal2}/> }
        </div>
)}

export default Secciones;

