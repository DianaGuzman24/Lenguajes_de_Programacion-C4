import {useParams} from 'react-router-dom'

const LenguajesDetails = () =>{
    
    const {lenguaje_id} = useParams()
    const [lenguaje, setlenguaje] = useState({})

    const loadLenguajesDetails = () => { 
        fetch('http://localhost:5005/api/details/${lenguaje_id}')
        .then(response => response.json)
        .then(lenguaje =>setlenguaje(lenguaje))
    }

    loadLenguajesDetails()

    return (
       <main>
            <h1>Estos serán los detalles de {listaLenguajes.nombre}</h1>
            <hr />
            <img src={listaLenguajes.logo} style={{display:'inline-block', width:'40%'}}></img>
            <article style={{display:'inline-block', width:'40%'}}>
            <p>listaLenguajes.caracteristicas</p>
            <h3> Detalles </h3>
            <ul>
                <li>{listaLenguajes.anioCreacion}</li>
                <li>{listaLenguajes.versionActual}</li>
                <li>{listaLenguajes.diseniadoPor}</li>
                <li>{listaLenguajes.paradigmaUsado}</li>
                <li>{listaLenguajes.esTipado}</li>
                <li>{listaLenguajes.esLenguajeFrontend}</li>
                <li>{listaLenguajes.esLenguajeBackend}</li>
                <li>{listaLenguajes.pros}</li>
                <li>{listaLenguajes.contras}</li>
                <li>{listaLenguajes.paginaOficial}</li>
                <li>{listaLenguajes.extensiones}</li>
                <li>{listaLenguajes.saberMas}</li>
            </ul>
            <Link to="/">Volver al inicio</Link>
            </article>
        </main>
    )
    }
export default LenguajesDetails