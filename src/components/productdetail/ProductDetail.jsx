import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/ProductsData';
import { useCartContext } from '../../context/CartContex';
import './ProductDetail.css'

const ProductDetail = () => {
    const {addToCart} = useCartContext();
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
            <h2 className='product-name'>{product.name}</h2>
            <span className='product-price'>${product.price}</span>

            <div className='size-selected'>
                <span className='ref-size'>Taglia: {selectedSize}</span>
                <ul className='list-sizes'>
                    {product.sizes.map((size) => (
                        <li key={size} onClick={() => handleSizeClick(size)} className={selectedSize === size ? 'selected' : 'selected-off'}>
                            {size}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='colore-product'>

            <span>
                Colore: {product.colore.map((color, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && ' / '}
                        {color}
                    </React.Fragment>
                ))}
            </span>
            
            <div className="colore-circle" style={{ background: product.colore.length > 1 ? `conic-gradient(${product.colore.join(', ')})` : product.colore[0] }}>
                {product.colore.map((color, index) => (
                    <React.Fragment key={index}>
                    </React.Fragment>
                ))}
            </div>
            

            </div>

            <div className="quantity-selector">
                <button className='button-quantity' onClick={decreaseQuantity}>-</button>
                <input className='input-quantity' type="number" value={quantity} readOnly />
                <button className='button-quantity' onClick={increaseQuantity}>+</button>
            </div>

            <div className='container-addToCart'>
                <button className='addToCart-button' onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail
