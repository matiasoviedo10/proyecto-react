import React, { useState } from 'react';
import { getProductById } from '../../data/ProductsData';
import CartProduct from '../../components/cartproduct/CartProduct';
import { isValidProduct } from '../../utils/api/validationProduct';
import './Cart.css';

const Cart = ({ productCart, onRemoveProduct }) => {
  const total = productCart.reduce((acc, { productIdNumber, quantity }) => {
    const product = getProductById(productIdNumber);
    return acc + (isValidProduct(product) ? product.price * quantity : 0);
  }, 0);

  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const firstProduct = productCart[0];
  const firstProductComponent = firstProduct ? (
    <CartProduct
      key={0}
      product={getProductById(firstProduct.productIdNumber)}
      quantity={firstProduct.quantity}
      selectedSize={firstProduct.selectedSize}
      onRemove={onRemoveProduct}
    />
  ) : null;

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <div className="accordion-header" onClick={toggleAccordion}>
          <h2>Products added to cart</h2>
        </div>
        {firstProductComponent}
        {productCart.length === 0 ? (
          <p>There are no products in the cart.</p>
        ) : (
          isAccordionOpen && (
            <div>
              {productCart.length > 1 && (
                <ul className='listproduct-cart'>
                  {productCart.slice(1).map(({ productIdNumber, quantity, selectedSize }, index) => {
                    const product = getProductById(productIdNumber);

                    if (!isValidProduct(product)) {
                      return (
                        <div key={index}>
                          <p>Error: Invalid ID for Product {productIdNumber}</p>
                        </div>
                      );
                    }
                    return <CartProduct
                      key={index + 1}
                      product={product}
                      quantity={quantity}
                      selectedSize={selectedSize}
                      onRemove={onRemoveProduct}
                    />;
                  })}
                </ul>
              )}
            </div>
          )
        )}
        <div className="total-container">
          <p>Total ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
