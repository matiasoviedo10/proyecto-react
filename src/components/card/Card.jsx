import CartActions from "../cartactions/CartActions";
import './Card.css'
import { useEffect, useState } from "react";

const Card = ({
    id,
    image , 
    title, 
    description, 
    price, 
    stock, 
    cartItems, 
    setCartItems,
    updateRemainingStock
    }) => {
        const [quantity, setQuantity] = useState(1); // Valor inicial: 1
        const [addedToCart, setAddedToCart] = useState(false);


      // Función para manejar el cambio de cantidad
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, stock);
        setQuantity(newQuantity);
    };

    const addToCart = () => {
        if (quantity > 0 && quantity <= stock) {
          const newStock = stock - quantity;
          updateRemainingStock(id, newStock); // Pasa el 'id' del producto
          setCartItems(cartItems + quantity);
          setAddedToCart(true);
        }
      };
    
      const removeFromCart = () => {
        if (cartItems > 0) {
          setCartItems(cartItems - quantity);
          const newStock = stock + quantity;
          updateRemainingStock(id, newStock); // Pasa el 'id' del producto
          setQuantity(1); // Restablece la cantidad a 1 al quitar del carrito
          setAddedToCart(false)
        }
      };

        useEffect(() => {
        if (stock === 0) {
            setQuantity(0);
        } else {
            setQuantity((q) => Math.min(1, q)); // Utiliza una actualización funcional
        }
        }, [stock]);
    
        
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
                    showRemoveButton={addedToCart} // Pasa el estado para mostrar/ocultar el botón de quitar
                />
            </div>
        </div>
    );
};


export default Card;
