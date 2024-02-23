import React from 'react';
import './About.scss';
import Header from './Common/Header';
import Footer from './Common/Footer';
import shop from './Images/Ecommerce-Shopping-Infographics.png'


function About() {
  return (
    <div>
      
      <div className='div4'>
      <img src={shop}/>
      <Header/>
      
      About facebook
      <Footer/>
      </div>
      </div>
  
      
  )
}

export default About