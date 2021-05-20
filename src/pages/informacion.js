import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const Informacion = () => (
    <Layout>
        <section className="info">
            <h1>¿Que es una vertiente?</h1>
            <p>
                Una vertiente es una fuente de agua natural que surge desde la tierra.
                Las vertientes tienen su origen en el agua subterránea, y son por tanto un reflejo directo
                del agua almacenada bajo nuestros pies. 
            </p>   
            <p>
                Una vertiente ocurre cuando el <a href="https://es.wikipedia.org/wiki/Nivel_fre%C3%A1tico"> 
                nivel freático </a>  del agua subterránea intersecta con la superficie, esto ocurre principalmente
                en los inicios de las quebradas que se disponen en la península.
            </p>
            <StaticImage src="../images/vertiente1.png" alt="esquema de vertientes"/>
            <h1>¿Por qué son importantes?</h1>
            <p>
                Las vertientes han representado de manera histórica en diferentes lugares del mundo,
                fuentes de agua relevantes para el uso humano, su importancia va incluso más allá ya
                que estas cumplen otras funciones vitales, entre las que se destacan por ejemplo,
                el aporte de agua y humedad necesaria para la mantención de la flora y fauna de diversos
                ecosistemas. Con el paso del tiempo, y de la mano del desarrollo de nuevas fuentes de agua
                para el uso humano, el valor de las vertientes ha sido olvidado. </p>
            <p>
                En los cerros de talcahuano, las vertientes son un elemento reconocido desde los primeros
                asentamientos en el área, y que retoman su importancia con el terremoto del 2010 frente
                a la falta de agua potable, ya que estas representaron una de las principales fuentes de
                agua dulce. 
            </p>
            <p>
                Las vertientes, cumplen el rol de ayudar en la mantención de gran parte de la vida de
                flora y fauna de las quebradas de la península de Tumbes, además de representar fuentes
                de agua para el regadío, diversas actividades domésticas, e incluso el potencial uso 
                para el consumo humano bajo el debido tratamiento del agua.
            </p>
            <StaticImage src="../images/quebrada.jpg" alt="imagen quebrada"/>
        </section>
    </Layout>
)

export default Informacion;