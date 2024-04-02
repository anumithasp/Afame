import React from 'react'
import './Educ.css'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Navbar from '../Navbar/Navbar'
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';

const Educ = () => {
  return (
    <div id="edusec">


      <div className="container d-flex justify-content-center align-items-center ">

        <div className="row " id="rowedu">
          <br /><br />
          <h3 className='text-center'>My Education</h3>

          <div className="   col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  mb-2"  id="">

            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12   mb-2 text-center p-3" id="colgm">
              <div className='text-center'><h6>Full Stack Development</h6></div>
              <div id="time" className='text-center'>09-23 -- 04-24<InsertInvitationTwoToneIcon style={{ fontSize: 15 }} /></div>
              <div id="institution" className='text-center' ><h6>ICT Academy</h6></div>


            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 p-3 text-center" id="colwat">


              <div className='text-center'><h6>BTech</h6></div>
              <div id="time" className='text-center'>07-19 -- 08-23<InsertInvitationTwoToneIcon style={{ fontSize: 15 }} /></div>
              <div id="institution" className='text-center' ><h6>Kerala Technological University</h6></div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 p-3 text-center" id="colink">

              <div className='text-center'><h6>12th</h6></div>
              <div id="time" className='text-center'>06-18 -- 05-19<InsertInvitationTwoToneIcon style={{ fontSize: 15 }} /></div>
              <div id="institution" className='text-center' ><h6>Chinmaya Vidyalaya</h6></div>

            </div>
          </div>















        </div>
      </div>
    </div>
  )
}

export default Educ