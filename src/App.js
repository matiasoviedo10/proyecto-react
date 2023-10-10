import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContex';

import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import ProductDetail from './components/productdetail/ProductDetail';
import Products from './pages/products/Products';


function App() {
  // const [productCart, setProductCart] = useState([])

  // const addToCart = (productIdNumber, quantity, selectedSize) => {
  // setProductCart((prevCart) => {
  //   const existingProductIndex = prevCart.findIndex(item => item.productIdNumber === productIdNumber);

  //   if (existingProductIndex !== -1){
  //     const existingProduct = prevCart[existingProductIndex];

  //   if (existingProduct.selectedSize !== selectedSize) {
  //       return [...prevCart, { productIdNumber, quantity, selectedSize }];
  //   };

  //     const updatedCart = [...prevCart];
  //     updatedCart[existingProductIndex].quantity += quantity;
  //     return updatedCart;
  //   } else {
  //     return [...prevCart, {productIdNumber, quantity, selectedSize}];
  //   }
  // })
  // };

  // const removeFromCart = (productId, selectedSize) => {
  //   setProductCart((prevCart) =>
  //     prevCart.filter((item) => item.productIdNumber !== productId || item.selectedSize !== selectedSize)
  //   );
  // };

  return (
    <BrowserRouter>

      <CartProvider>

        <NavBar  />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart /*productCart={productCart} onRemoveProduct={removeFromCart}*//>} />
            <Route path='/products' element={<Products /*addToCart={addToCart} *//>} />
            <Route path='/products/:productId' element={<ProductDetail /*addToCart={addToCart} *//>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>

      </CartProvider>

    </BrowserRouter>  
  );
}

export default App;
