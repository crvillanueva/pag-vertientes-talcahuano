import * as React from "react"
import { Link } from 'gatsby'
import cuadroInfo from '../images/cuadro-info-vertientes.jpg'
import cuadroMapa from '../images/cuadro-mapa.jpg'
import cuadroGeologia from '../images/cuadro-geologia.jpg'
import cuadroCalidad from '../images/cuadro-calidad.jpg'
import cuadroCorrel from '../images/cuadro-correlacion.jpg'

const Secciones = () => (
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
            <Link to="/geoquimica/">
                <img src={cuadroCalidad} alt="cuadro app calidad y disponibilidad del agua"/>
            </Link>
        </div>
        <div className="caja">
            <Link to="/correlación/">
                <img src={cuadroCorrel} alt="cuadro app correlacion de elementos"/>
            </Link>
        </div>
    </div>
    )

export default Secciones;

