import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/ProductsData';

import './ProductDetail.css'

const ProductDetail = ({addToCart}) => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(39)

    const productIdNumber = +productId;

    const product = getProductById (productIdNumber)

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        addToCart(productIdNumber, quantity, selectedSize)
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (    
        <div>
            <img className='image-product' src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <span>${product.price}</span>
            <ul>
                {product.sizes.map((size) => (
                    <li key={size} onClick={() => handleSizeClick(size)} className={selectedSize === size ? 'selected' : ''}>
                        {size}
                    </li>
                ))}
            </ul>
            <p>Colore:{product.colore}</p>
            <div className="quantity-selector">
                <button onClick={decreaseQuantity}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={increaseQuantity}>+</button>
            </div>
            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail
