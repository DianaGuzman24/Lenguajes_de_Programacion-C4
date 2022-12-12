import { useState } from "react"
import { useParams, Link } from "react-router-dom"

const LenguajesDetails = () =>{
    
    const { lenguaje_id } = useParams()
    const [lenguaje, setlenguaje] = useState({})

    const loadLenguajesDetails = () => { 
        fetch(`http://localhost:5005/api/details/${lenguaje_id}`)
        .then(response => response.json())
        .then(lenguaje =>setlenguaje(lenguaje))
    }

    loadLenguajesDetails()

    return (
       <main>
            <h1>Estos serán los detalles de {lenguaje.nombre}</h1>
            <hr />
            <img src={lenguaje.logo} style={{display:'inline-block', width:'40%'}}></img>
            <article style={{display:'inline-block', width:'40%'}}>
            <p>{lenguaje.caracteristicas}</p>
            <h3> Detalles </h3>
            <ul>
                <li><b>añoCreacion: </b>{lenguaje.anioCreacion}</li>
                <li><b>versionActual: </b>{lenguaje.versionActual}</li>
                <li><b>diseñadoPor: </b>{lenguaje.diseniadoPor}</li>
                <li><b>paradigmaUsado: </b>{lenguaje.paradigmaUsado}</li>
                <li><b>esTipado: </b>{lenguaje.esTipado}</li>
                <li><b>esLenguajeFrontend: </b>{lenguaje.esLenguajeFrontend}</li>
                <li><b>esLenguajeBackend: </b>{lenguaje.esLenguajeBackend}</li>
                <li><b>pros: </b>{lenguaje.pros}</li>
                <li><b>contras: </b>{lenguaje.contras}</li>
                <li><b>paginaOficial: </b>{lenguaje.paginaOficial}</li>
                <li><b>extensiones: </b>{lenguaje.extensiones}</li>
                <li><b>saberMas: </b>{lenguaje.saberMas}</li>
            </ul>
            <Link to="/">Volver al inicio</Link>
            </article>
        </main>
    )
    }
export default LenguajesDetails