import * as React from "react"
import Layout from '../components/layout'
import Secciones from '../components/secciones'
import Slider from '../components/slider'
import '../styles/styles.scss'

const IndexPage = () => (
  <Layout>
    <Slider/>
    <div className="texto-principal">
      <p>
        En los cerros de Talcahuano existen numerosas vertientes, las que han tenido un rol histórico 
        como fuente de agua desde los primeros asentamientos en la zona.
      </p>
      <p>El adecuado conocimiento y protección de nuestras vertientes es vital para nuestra comunidad.</p>
      <p>¡Cuidemos nuestros recursos!</p>
    </div>
    <Secciones/>
  </Layout>
)

export default IndexPage;
