import './NavBar.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerIcon from '../hamburgericon/HamburgerIcon';
import DiscountBadge from '../discountbadge/DiscountBadge';
import CarlWidget from '../carlwidget/CarlWidget';
import SiteTitle from '../brand/sitetitle/SiteTitle';


function NavBar({quantity}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="mi-navbar">
      <div className="mi-menu-toggle">
        <div className="mi-menu-icon" onClick={toggleMenu}>
          <HamburgerIcon/>
        </div>
        <div className={`nav-links ${menuVisible ? 'show-menu' : ''}`}>

          <Link className='link-route' to={'/'} onClick={closeMenu}>
            <h2 className="mi-nav-link">Home</h2>
          </Link>

          <div className='pre-order-exclusive'>
          <Link className='link-route' to={'/products'} onClick={closeMenu}>
            <h2 className="mi-nav-link">Products</h2>
          </Link>
          <DiscountBadge/>
          </div>

          <Link className='link-route' to={'/contact'} onClick={closeMenu}>
            <h2 className="mi-nav-link nav-link1">Contact</h2>
          </Link>

          <a href="./NavBar.jsx" className="mi-nav-link">Profile</a>
          <a href="./NavBar.jsx" className="mi-nav-link nav-link1">About us</a>

        </div>
      </div>
      
      <Link className="mi-title" to={"/"} onClick={closeMenu}>
      <SiteTitle/>
      </Link>
      
      <div className='mi-carlwidget'>
      <Link to={'/cart'} onClick={closeMenu}>
      <CarlWidget quantity={quantity}/>
      </Link>

      </div>
    </div>
  );
}

export default NavBar;
