import NavBar from '/Users/MatiasOviedo/Desktop/react/proyecto-react/src/components/navbar/NavBar.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import ProductDetail from './components/productdetail/ProductDetail';
import Products from './pages/products/Products';


function App() {
  const [cartItems, setCartItems] = useState(0);

  

  return (
    <BrowserRouter>
      <NavBar 
      cartItems={cartItems} 
      />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
