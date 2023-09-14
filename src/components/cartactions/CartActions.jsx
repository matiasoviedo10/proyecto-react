import React from 'react'

const CartActions = ({cartItems, addToCart, removeFromCart}) => {
    return (
        <div className='cart-buttons'>
            <button onClick={addToCart}>Agregar</button>
            <button onClick={removeFromCart}>Quitar</button>
        </div>
    )
}

export default CartActions;
