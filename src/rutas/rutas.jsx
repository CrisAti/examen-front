import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import Crear from "../paginas/crear.jsx";
import Obtener from "../paginas/obtener.jsx";

export default function Rutas (){
    return(
    <Router>
            <Routes>
                <Route path="/" element ={<App/>}/>
                <Route path="/crear" element ={<Crear/>}/>
                <Route path="/obtener" element ={<Obtener/>}/>
            </Routes>
    </Router>
    );
}