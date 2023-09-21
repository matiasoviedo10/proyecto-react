import React from 'react'
import './CarlWidget.css'

const CarlWidget = ({ cartItems }) => {
  return (
    <div className='cart-widget'>
      <svg className='carl-widget-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1528 8H5.84709C5.35825 8 4.94106 8.35341 4.8607 8.8356L3.19403 18.8356C3.09244 19.4451 3.56248 20 4.18042 20H19.8195C20.4374 20 20.9075 19.4451 20.8059 18.8356L19.1392 8.8356C19.0589 8.35341 18.6417 8 18.1528 8Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="cart-item-count">{cartItems}</span> 
    </div>
  )
}

export default CarlWidget;
