import React, { useState } from 'react';
import './NavBar.css'
import CarlWidget from '../carlwidget/CarlWidget';
import HamburgerIcon from '../hamburgericon/HamburgerIcon';
import DiscountBadge from '../discountbadge/DiscountBadge';
import CartActions from '../cartactions/CartActions';


function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1)
  };

  const removeFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1)
    }
  };

  return (
    <div className="mi-navbar">
      <div className="mi-menu-toggle">
        <div className="mi-menu-icon" onClick={toggleMenu}>
          <HamburgerIcon/>
        </div>
        <div className={`nav-links ${menuVisible ? 'show-menu' : ''}`}>
          <div className='pre-order-exclusive'>
          <a href="../public/index.html" className="mi-nav-link">New in</a>
          <DiscountBadge/>
          </div>
          <a href="./NavBar.jsx"className="mi-nav-link">Best sellers</a>
          <a href="./NavBar.jsx" className="mi-nav-link nav-link1">Ready to ship</a>
          <a href="./NavBar.jsx" className="mi-nav-link">Profile</a>
          <a href="./NavBar.jsx" className="mi-nav-link nav-link1">About us</a>
        </div>
      </div>
      <div className="mi-title">LORENZO RICCI</div>
      <div className='mi-carlwidget'>
      <CarlWidget cartItems={cartItems}/>
      </div>
      <CartActions cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      {console.log(cartItems)}
    </div>
  );
}

export default NavBar;
