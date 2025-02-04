import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Página de registro de información</h1>
      <Link to="/crear">
        <button>Crear registro</button>
      </Link>
      <Link to="/obtener">
        <button>Obtener registros</button>
      </Link>
    </div>
  );
}
