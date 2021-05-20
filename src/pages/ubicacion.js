import * as React from 'react'
import Layout from '../components/layout'

const Ubicacion = () => {
    
    return (
    <>
        <Layout>
            <section className="ubicacion">
                <iframe src={"/mapa_folium.html"} id="mapa" title="mapa de ubicacion de vertientes"></iframe>
                <div className="mapa-texto">
                <button onClick={() => console.log('hola')}>Instrucciones</button>
                </div>
            </section>
        </Layout>
    </>
)}



export default Ubicacion;