


import NavBar from  './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (quantity) => {
    setCartItems(cartItems + quantity);
  };

  const removeFromCart = (quantity) => {
    if (cartItems >= quantity) {
      setCartItems(cartItems - quantity);
    }
  };

  

  return (
    <div>
      <NavBar 
      cartItems={cartItems} 
      />
      <ItemListContainer 
      cartItems={cartItems}
      setCartItems={setCartItems}
      mensaje="Productos"
      addToCart={(quantity) => addToCart(quantity)}
      removeFromCart={(quantity) => removeFromCart(quantity)}
      />
    </div>
  );
}

export default App;
