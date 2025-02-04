import { Link } from "react-router-dom";
import ObtenerDatos from "../componentes/obtenerTodos.jsx";
export default function Obtener() {
  return (
    <div>
      <h1>Página de Obtención de Registros</h1>
      <ObtenerDatos/>
      <Link to="/">
        <button>Volver al Menú</button>
      </Link>
    </div>
  );
}
