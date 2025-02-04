import React, { useEffect, useState } from "react";
import { obtenerTodos } from "../api/api.jsx";
const ObtenerDatos = () =>{
    const [datos,setDatos] = useState([]);
    useEffect(() =>{
        const fetchDatos = async () =>{
            try{
                const data = await obtenerTodos();
                setDatos(data);
            } catch (error){
                console.error("Error en la carga de datos",error)
            }
        }
        fetchDatos(); 
    },[]);
    return(
        <div>
            <ul>
                {datos.map((dato)=>(
                    <li key={dato._id}> 
                        <h2>{dato.producto} </h2>
                        <p>El precio anterior es: {dato.precioAnterior}</p>
                        <p>Su precio actual es: {dato.precioActual}</p>
                        <p>El porcentaje de inflacion es: {dato.porcentajeInflacion}</p>
                        <p>La descripcion del articulo es: {dato.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ObtenerDatos;
