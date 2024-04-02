import React from 'react'
import './About.css'

import Navbar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Educ from '../Education/Educ'
import Contact from '../Contact/Contact'


const About = () => {
  return (
    <div id="aboutsec" >


     
      
      
      
      <div className="container  d-flex justify-content-center align-items-center ">
        <div className="row  " id="row1">
        <h4 className=" p-5 text-start ms-5 " id="hey">Hey there...</h4>
        <p className="aboutme container d-flex justify-content-center align-items-center"><h3><b>I'm Anumitha,</b></h3>  </p>
          <div className=' col col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center' id="col1">
            <img id="image1" src="Anumithasp.png" />


          </div>
          <div className="col col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " id="col2">

            
            <p className=" text-center
             aboutme ms-5 mx-5 ps-5 px-5">I am a recent graduate with a Bachelor's degree 
              in Computer Science and Engineering.I am passionate about technology
              to drive positive changes and solve
              complex problems..I'm excited about
               the journey ahead and look forward to  contributing my skillsand
               enthusiasm to innovative projects that shape the future of technology.</p>
          


           

          </div>

        </div>
      </div>

      <br />

      
      




 
    </div>
  )
}

export default About