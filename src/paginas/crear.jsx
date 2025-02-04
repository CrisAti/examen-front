import { Link } from "react-router-dom";
import CrearData from "../componentes/crear.jsx";

export default function Crear() {
  return (
    <div>
      <h1>Página de Creación</h1>
      <CrearData/>
      <Link to="/">
        <button>Volver al Menú</button>
      </Link>
    </div>
  );
}
