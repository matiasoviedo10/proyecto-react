import NavBar from '/Users/MatiasOviedo/Desktop/react/proyecto-react/src/components/navbar/NavBar.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import ProductDetail from './components/productdetail/ProductDetail';
import Products from '/Users/MatiasOviedo/Desktop/react/proyecto-react/src/pages/products/Products.jsx';


function App() {
  const [productCart, setProductCart] = useState([])

  const addToCart = (productIdNumber, quantity, selectedSize) => {
  setProductCart((prevCart) => {
    const existingProductIndex = prevCart.findIndex(item => item.productIdNumber === productIdNumber);

    if (existingProductIndex !== -1){
      const existingProduct = prevCart[existingProductIndex];

    if (existingProduct.selectedSize !== selectedSize) {
        return [...prevCart, { productIdNumber, quantity, selectedSize }];
    };

      const updatedCart = [...prevCart];
      updatedCart[existingProductIndex].quantity += quantity;
      return updatedCart;
    } else {
      return [...prevCart, {productIdNumber, quantity, selectedSize}];
    }
  })
  };

  const removeFromCart = (productId, selectedSize) => {
    setProductCart((prevCart) =>
      prevCart.filter((item) => item.productIdNumber !== productId || item.selectedSize !== selectedSize)
    );
  };

  return (
    <BrowserRouter>

    <NavBar quantity={productCart.reduce((total, item) => total + item.quantity, 0)} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart productCart={productCart} onRemoveProduct={removeFromCart}/>} />
        <Route path='/products' element={<Products addToCart={addToCart} />} />
        <Route path='/products/:productId' element={<ProductDetail addToCart={addToCart} />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </BrowserRouter>  
  );
}

export default App;
