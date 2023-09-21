import React from 'react'
import './ItemListContainer.css'
import Card from '../card/Card'
import { useState } from 'react'

const ItemListContainer = ({
  removeFromCart,
  addToCart,
  cartItems,
  setCartItems,
  mensaje
}) => {

  const [remainingStocks, setRemainingStocks] = useState([
    {
      id: 1,
      initialStock: 10,
      currentStock: 10,
    },
    {
      id: 2,
      initialStock: 20,
      currentStock: 20,
    },
  ]);

  const products = [
    {
      id: 1,
      image: "",
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      image: "",
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 200,
      stock: 20,
    },
  ];

  const updateRemainingStock = (productId, newStock) => {
    setRemainingStocks((prevStocks) =>
      prevStocks.map((stock) =>
        stock.id === productId ? { ...stock, currentStock: newStock } : stock
      )
    );
  };

  return (
    <div className="prop-mensaje">
      <h1>{mensaje}</h1>
      {products.map((product, index) => (
        <Card 
        key={index}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        stock={remainingStocks[index].currentStock} // Pasar el stock restante
        cartItems={cartItems} 
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        updateRemainingStock={updateRemainingStock} // Pasa la función para actualizar el stock restante
        />
      ))}
      
    </div>
  )
}

export default ItemListContainer
