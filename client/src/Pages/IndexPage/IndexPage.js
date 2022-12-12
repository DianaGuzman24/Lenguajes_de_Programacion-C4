import {Link} from 'react-router-dom'

const IndexPage = () =>{
    return (
       <main>
            <h1>Bienvenid@ al MERN de lenguajes de programación</h1>
            <hr />
            <Link to="/galeria">Ver galeria</Link>
       </main>
    )
}

export default IndexPage;