import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage'
import LenguajesPage from './Pages/LenguajesPage/LenguajesPage'
import LenguajesDetails from './Pages/LenguajesDetails/LenguajesDetails'

import{Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<LenguajesPage />} />
        <Route path="/detalles/:lenguaje_id" element={<LenguajesDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
