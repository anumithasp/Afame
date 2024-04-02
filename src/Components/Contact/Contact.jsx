import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
import { TextField } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div id="contactsec" className="row " >



      <div className="container d-flex justify-content-center align-items-center ">

        <div className="row " id="row2">
          <br/><br/>
        <h3 className='text-center'>Contact Me</h3>

          <div className="   col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4 mb-2" id="">
            
            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12   mb-2 text-center p-3" id="colgm">
              <EmailOutlinedIcon /><br />
              anumithaspradiu@gmail.com<br />
              <Link id="writeme" to="mailto:anumithaspradiu@gmail.com">Write Me</Link>


            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 p-3 text-center" id="colwat">

              <WhatsAppIcon /><br />
              7907387359<br />
              <Link id="writeme" to="https://wa.me/8547087566">Write Me</Link>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 p-3 text-center" id="colink">
              <LinkedInIcon /><br />
              linkedin.com/in/anumitha-s-pradiu<br />
              <Link id="writeme" to="https://www.linkedin.com/in/anumitha-s-pradiu/">Write Me</Link>

            </div>
            
          </div>




       










        </div>
        
      </div>

      <Footer/>
     
    </div>
     

  )
}

export default Contact