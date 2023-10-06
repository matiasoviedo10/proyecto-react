import React from "react";
import './CartProduct.css'

const CartProduct = ({product, quantity, selectedSize, onRemove}) => {
    const handleRemove = () => {
        onRemove(product.id, selectedSize);
    }

    return(
        <li className="cartproduct-container">
                <img className="cartproduct-image" src={product.image} alt={product.name} />
                <span className="cartproduct-name">{product.name}</span>
                <span className="cartproduct-size">Size {`( ${selectedSize} )`}</span>
                <span className="cartproduct-price">$ {product.price}</span>
                <span className="cartproduct-quantity">Quantity {`( ${quantity} )`}</span>
                <button className="cartproduct-button" onClick={handleRemove}>Remove</button>
        </li>
    )
}

export default CartProduct;