import {useState} from 'react'
import {Link} from 'react-router-dom'

import './LenguajesPage.css'

const LenguajesPage = () => {

    const [listaLenguajes, setlistaLenguajes] = useState([])

    const loadLenguajes = () =>{
        fetch('http://localhost:5005/api/listaLenguajes')
        .then(res => res.json())
        .then(allLenguajes => setlistaLenguajes(allLenguajes))
    }

    loadLenguajes()

    return (
       <main>
            <h1>Esta será la lista de lenguajes de programación</h1>
            <hr />
            {listaLenguajes.map(eachLenguaje => {
                return (
                    <Link to={`/detalles/${eachLenguaje._id}`}>
                    <article className='lenguaje-card'>
                        <img src={eachLenguaje.logo}></img>
                        <h3>{eachLenguaje.nombre}</h3>
                    </article>
                    </Link>
                )
            })}  
            <Link to="/">Volver al inicio</Link>
       </main>
    )
}

export default LenguajesPage;