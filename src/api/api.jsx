import axios from "axios";

const Url = "https://examen-back-three.vercel.app/articles";

export const obtenerTodos = async () => {
    try{
        const response = await axios.get(Url);
        return  response.data;
    } catch (error){
        console.error("Error al obtener los datos",error);
        throw error;
    }
};
export const crearDatos = async (data) => {
    try {
        const response = await axios.post(Url, data);
        return response.data;
      } catch (error) {
        console.error("Error al crear la data", error);
        throw error;
      }
    };
