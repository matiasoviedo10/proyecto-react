


import NavBar from  './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import { useState } from 'react';
import HomePage from './components/homepage/HomePage';


function App() {
  const [cartItems, setCartItems] = useState(0);

  

  return (
    <div>
      <NavBar 
      cartItems={cartItems} 
      />
      <HomePage/>
      <ItemListContainer 
      cartItems={cartItems}
      setCartItems={setCartItems}
      mensaje="Productos"
      />
    </div>
  );
}

export default App;
