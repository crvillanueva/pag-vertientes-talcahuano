import * as React from 'react'
import { useState } from 'react'
import Layout from '../components/layout'
import Modal from '../components/modalInstrucciones'

const Ubicacion = () => {

    const [showModal, setShow] = useState(false);

    const cerrarModal = () => {
        setShow(false);
    }
    
    return (
    <Layout>
        <section className="ubicacion">
            <div className="mapa-texto">
                <button onClick={() => setShow(true)}>Instrucciones</button>
            </div>
            <div className="frame-mapa">
                <iframe src={"/mapa_folium.html"} id="mapa" title="mapa de ubicacion de vertientes"></iframe>
            </div>
        </section>
        {showModal && <Modal cerrarModal={cerrarModal}/>}
    </Layout>
)}



export default Ubicacion;