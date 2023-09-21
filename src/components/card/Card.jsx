import CartActions from "../cartactions/CartActions";
import './Card.css'
import { useState } from "react";

const Card = ({
    image , 
    title, 
    description, 
    price, 
    stock, 
    cartItems, 
    addToCart, 
    removeFromCart 
    }) => {

        const [quantity, setQuantity] = useState(1); // Valor inicial: 1

        // Función para manejar el cambio de cantidad
        const handleQuantityChange = (event) => {
            const newQuantity = parseInt(event.target.value, 10);
            setQuantity(newQuantity);
        };

    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">Stock: {stock}</p>

                <div className="quantity-selector">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <input
                        type="number"
                        min="1"
                        max={stock}
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button onClick={() => setQuantity(Math.min(stock, quantity + 1))}>+</button>
                </div>

                <CartActions 
                cartItems={cartItems} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                quantity={quantity}
                />
            </div>
        </div>
    );
};


export default Card;
