'use client';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';  
import axios from 'axios';

const ProductosPag = () => {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos`);
            const result = await response.data;
            setProductos(result);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProducto = (id) => async () => {
        try {                   
            const response = await axios.delete(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            console.log(result);
            setProductos((preVal) => {
                const newList = preVal.filter((item) => item._id !== id);
                console.log(newList);
                return ([...newList]);
            })
            
        } catch (error) {
            console.log(error);
        }       
    }

    useEffect(() => {
        getProductos();    
    }, []);

    return (
        <Fragment>
            <h1>Productos Disponibles</h1>
            <ul>
                {productos.map((item, index) => (
                    <li key={index}>
                        <div style={{display:"flex", columnGab: 8}}>
                            <h3>
                                <Link href={`/productos/${item._id}`}>{item.title}</Link>
                            </h3>
                            <button><Link href={`/productos/${item._id}/edit`}>Editar</Link></button>
                            <button onClick={deleteProducto(item._id)}>Eliminar</button>
                        </div>                           
                    </li>                        
                ))}
            </ul>
        </Fragment>
    )
}

export default ProductosPag;
