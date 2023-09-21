import React, { useState } from 'react';
import './NavBar.css'
import CarlWidget from '../carlwidget/CarlWidget';
import HamburgerIcon from '../hamburgericon/HamburgerIcon';
import DiscountBadge from '../discountbadge/DiscountBadge';


function NavBar({cartItems}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
    </div>
  );
}

export default NavBar;
