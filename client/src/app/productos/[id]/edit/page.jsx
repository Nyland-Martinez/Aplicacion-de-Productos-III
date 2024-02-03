'use client'
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

const EditarProductosPag = () => {

    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const getProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            setTitle(result.title);
            setPrice(result.price);
            setDescription(result.description);
        } catch (error) {
            console.log(error);
        }
        
    }


    const handleUpdateProducto = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            price: price,
            description: description,
        }
        console.log(data);
    
        try {
            const response = await axios.put(`http://localhost:8000/api/productos/${id}`, data);
            const result = await response.data;
            router.push("/productos");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    
    
    };

    useEffect(() => {
        getProducto();    
    }, [])

return (

    <main>
        <form onSubmit={handleUpdateProducto}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Actualizar</button>
        </form>
    </main>
    )
}

export default EditarProductosPag;