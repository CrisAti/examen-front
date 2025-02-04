import React, { useState } from "react";
import { crearDatos } from "../api/api.jsx";

const CrearData = () =>{
    const[producto,setProducto] = useState("");
    const[precioAnterior,setPrecioAnterior] = useState("");
    const[precioActual,setPrecioActual] = useState(""); 
    const[porcentajeInflacion,setPorcentajeInflacion] = useState("");
    const[descripcion,setDescripcion] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const newData = {producto,precioAnterior,precioActual,porcentajeInflacion,descripcion};
        const response = await crearDatos(newData);
        setProducto("");
        setPrecioAnterior("");
        setPrecioActual("");
        setPorcentajeInflacion("");
        setDescripcion("");
        console.log("Respuesta del server:",response)
    } catch (e){
        console.error("Error al crear",e);
    }
}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Producto: </label>
                <input
                type ="text"
                id = "producto"
                value = {producto}
                onChange={(e)=>setProducto(e.target.value)}
                />
            </div>
            <div>
                <label>Precio Anterior: </label>
                <input
                type ="text"
                id = "precioAnterior"
                value = {precioAnterior}
                onChange={(e)=>setPrecioAnterior(e.target.value)}
                />
            </div>
            <div>
                <label>Precio actual: </label>
                <input
                type ="text"
                id = "precioActual"
                value = {precioActual}
                onChange={(e)=>setPrecioActual(e.target.value)}
                />
            </div>
            <div>
                <label>% de inflacion: </label>
                <input
                type ="text"
                id = "porcentajeInflacion"
                value = {porcentajeInflacion}
                onChange={(e)=>setPorcentajeInflacion(e.target.value)}
                />
            </div>
            <div>
                <label>Descripcion del articulo: </label>
                <input
                type ="text"
                id = "descripcion"
                value = {descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">Crear el articulo</button>
        </form>
    </div>
)
};
export default CrearData;