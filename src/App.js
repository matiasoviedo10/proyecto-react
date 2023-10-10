import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContex';

import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import ProductDetail from './components/productdetail/ProductDetail';
import Products from './pages/products/Products';


function App() {

  return (
    <BrowserRouter>

      <CartProvider>

        <NavBar  />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>

      </CartProvider>

    </BrowserRouter>  
  );
}

export default App;
