'use client'
import axios from "axios";
import { useParams } from "next/navigation"
import { useState, useEffect } from "react";


const DetallesProductosPag = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    const getProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            setProducto(result);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getProducto();    
    }, [])

    return (
    
        <main>
            <h1>Detalles del Producto</h1>
            <h3>Título: {producto.title}</h3>
            <h3>Precio: $ {producto.price}</h3>
            <h3>Descripción: {producto.description}</h3> 
            <button>
                <a href={`/productos/${id}/edit`}>Editar</a>
            </button>
        </main>
        
    )

}

export default DetallesProductosPag;