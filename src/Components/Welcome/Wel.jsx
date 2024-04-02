import React, { useState } from 'react'
import './Wel.css'
import { Button } from '@mui/material'
import About from '../About/About'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Educ from '../Education/Educ'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'

const Wel = () => {



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 



 
  return (
    <div>
      <Navbar/>
    
          <div className="container-fluid" id="full">
      <div className="d-flex justify-content-center align-items-center" id="image">
        <img src="Anumitha.png" />

      </div>

      <div className='btn container d-flex justify-content-center align-items-center' id="textin">
        <h1>Hi, I am Anumitha,</h1>
        
        
      </div>
      

      

    </div><About /><Projects /><Skills /><Educ /><Contact />

            
        
    </div>
  )
}

export default Wel