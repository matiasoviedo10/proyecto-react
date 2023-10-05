import React from 'react'
import { getProductById } from '../../data/ProductsData'

const CartProduct = ({product, quantity, selectedSize, onRemove}) => {
  const handleRemove = () => {
    onRemove(product.id, selectedSize);
  }
  return(
    <li>
      <p>{product.name}</p>
      <p>Quantity: {quantity}</p>
      <p>Size: {selectedSize}</p>
      <button onClick={handleRemove}>Remove</button>
    </li>
  )
}

const Cart = ({productCart, onRemoveProduct}) => {
  return (
    <div>
        <h1>Cart</h1>
        {productCart.length === 0 ? (
        <p>There are no products in the cart.</p>
        ) : (
          <ul>
          {productCart.map(({productIdNumber, quantity, selectedSize}, index) => {
            const product = getProductById(productIdNumber);
            if (!product) {
              return null;
            }
            return <CartProduct key={index} product={product} quantity={quantity} selectedSize={selectedSize} onRemove={onRemoveProduct}/>;
          })}
        </ul>
          )}
    </div>
  )
}

export default Cart
