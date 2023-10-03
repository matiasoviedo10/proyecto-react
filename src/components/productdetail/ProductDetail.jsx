import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../../data/ProductsData';

const ProductDetail = () => {
    const {id} = useParams();
    const productId = parseInt(id);

    if (isNaN(productId)) {
    // Manejar el caso cuando id no es un número válido
    console.error("El id no es un número válido");
    return <div>Error: Producto no encontrado</div>;
    }

    const product = productsData.find((p) => p.id === productId);

    if (!product) {
        // Manejar el caso cuando no se encuentra el producto
        console.error("Producto no encontrado");
        return <div>Error: Producto no encontrado</div>;
    }

    return (    
        <div>
            {/* <img src={product.image} alt={product.name}></img> */}
            <h2>{product.name}</h2>
        </div>
    )
}

export default ProductDetail
