import React from 'react'
import homePageImg from '../../assets/homepage.svg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <img className='home-page-img' src={homePageImg} alt ="Imagen principal" />
    </div>
  )
}

export default HomePage
