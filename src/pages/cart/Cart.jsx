import React from 'react'
import { getProductById } from '../../data/ProductsData'
import CartProduct from '../../components/cartproduct/CartProduct'
import { isValidProduct } from '../../utils/api/validationProduct'
import './Cart.css'

const Cart = ({productCart, onRemoveProduct}) => {
  const total = productCart.reduce((acc, { productIdNumber, quantity }) => {
    const product = getProductById(productIdNumber);
    return acc + (isValidProduct(product) ? product.price * quantity : 0);
  }, 0);

  return (
    <div>
        <h1>Cart</h1>
        {productCart.length === 0 ? (
        <p>There are no products in the cart.</p>
        ) : (
          <div>
            <h2>Products added to cart</h2>
            <ul className='listproduct-cart'>
            {productCart.map(({productIdNumber, quantity, selectedSize}, index) => {
              const product = getProductById(productIdNumber);

              if (!isValidProduct(product)) {
                return (
                  <div key={index}>
                    <p>Error: Invalid ID for Product {productIdNumber}</p>
                  </div>
                );
              }
              return <CartProduct 
                        key={index} 
                        product={product} 
                        quantity={quantity} 
                        selectedSize={selectedSize} 
                        onRemove={onRemoveProduct}
                      />;
            })}
            </ul>
            <div className="total-container">
              <p>Total ${total.toFixed(2)}</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Cart
