import * as React from 'react'
import Layout from '../components/layout'
import imgMet from '../images/met.jpg'
import imgInt from '../images/int.jpg'
import imgSed from '../images/sed.jpg'

const Geologia = () => (
    <Layout>
        <section className="geo">
            <h1>Geología de la Península de Tumbes</h1>
            <p>
                La provincia de Concepción posee una geología caracterizada por una gran variedad de rocas, 
                en ella  se pueden encontrar rocas con edades que pueden alcanzar más 360 millones de años, 
                rocas con diverso y abundante contenido fósil animal y vegetal, depósitos fluviales y aluviales,
                entre otras.
            </p>
            <p>
                En la península de Tumbes es también posible registrar parte de esta diversidad. Y en ella 
                se encuentran rocas metamórficas, ígneas y sedimentarias.
            </p>
            <h2>Rocas Metamórficas</h2>
            <div className="tipo-roca">
                <img src={imgMet} alt="roca metamorfica"/>
                <div>
                    <p>
                        Las rocas metamórficas corresponden a rocas que han sufrido a lo largo de su historia procesos de
                        transformación debido a altas temperaturas y/o presiones.
                    </p>
                    <p>
                        La península de Tumbes (y Hualpén) es dominada por este tipo de rocas,
                        donde es posible encontrar la denominada "Serie Occidental",
                        que corresponde a un grupo de rocas de edades superiores a los 360 millones de años,
                        representadas en el área por rocas de grano fino de color azulado.
                    </p>
                </div>
            </div>
            <h2>Rocas Intrusivas</h2>
            <div className="tipo-roca">
                <div>
                    <p>
                        Las rocas intrusivas son rocas formadas por el enfriamiento
                        del magma en el interior de la Tierra.
                    </p>
                    <p>
                        En la península de Tumbes es posible encontrar en lugares puntuales varios de estos cuerpos, 
                        que forman parte de un grupo de rocas denominadas "Plutón Hualpén" 
                        (debido a su extenso reconocimiento en la península homoníma). 
                        Estas rocas con aproximadamente 210 millones de años poseen minerales de colores claros,
                        responsables de varias de las playas de arenas blancas de la península.
                    </p>
                </div>
                <img src={imgInt} alt="roca intrusiva"/>
            </div>
            <h2>Rocas Sedimentarias</h2>
            <div className="tipo-roca">
                <img src={imgSed} alt="roca sedimentaria"/>
                <div>
                    <p>
                        Rocas de la "Formación Quiriquina" se encuentran de manera aislada en el área de San Vicente,
                        y varios de los cerros islas de Talcahuano (como el cerro el Morro). 
                        Corresponden a areniscas con un característico color verdoso con una edad de cerca de 60 millones, 
                        estas rocas además pueden tener abundante contenido fósil en algunas partes de la región.
                    </p>
                </div>

            </div>
        </section>
        <div className="ref">
            <h2>Referencias</h2>
            <div>
                <p>
                    <b>QUEZADA, J. 1996.</b> Geología urbana y Ambiental de la Ciudad de Concepción.
                    Memoria para optar al Título de Geólogo. 
                    Universidad de Concepción, Departamento Ciencias de la Tierra (Inédito): 143 pp., Concepción.
                </p>
                <p>
                    <b>VASQUEZ, P. 2001.</b> PETROLOGÍA Y GEOTERMOBAROMETRÍA DEL BASAMENTO METAMÓRFICO DE LA CORDILLERA DE 
                    LA COSTA DE CHILE, ENTRE LOS 36°30’S Y 38°00’S. 
                    Memoria para optar al Título de Geólogo. 
                    Universidad de Concepción, Departamento Ciencias de la Tierra (Inédito): 170 pp., Concepción.
                </p>
            </div>
        </div>
    </Layout>
)

export default Geologia