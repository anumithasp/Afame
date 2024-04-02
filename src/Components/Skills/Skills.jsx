import React from 'react'
import './Skills.css';
import Header from '../Header/Header'
import { CardActions } from '@mui/material'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
const Skills = () => {
  return (

    <div id="skillsec">
   
        

        <div className="container d-flex justify-content-center align-items-center" id="skill">
        <div className="row ">
        <h3 className='text-center mb-3'>My Skills</h3>
          <div  className="col col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-3 " style={{color: 'rgb(2, 6, 59)'}} id="colm1">

            <div className='text-center'>
            <h5 >Frontend </h5><br/>
            </div>
              <div>
              
              <ArrowRightOutlinedIcon />Html
                
              </div>
              
              <div>
              <ArrowRightOutlinedIcon />Css</div>
              
              <div> <ArrowRightOutlinedIcon />JavaScript</div>
              
              <div> <ArrowRightOutlinedIcon />React Js</div>
              
              <div> <ArrowRightOutlinedIcon />Bootstrap</div>
              <br/>
            
            

          </div>
          
          <div className="col col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4  p-3" id="colm2">

            <div className='text-center'>
            <h5 >Backend </h5><br/>
            </div>
              <div><ArrowRightOutlinedIcon />Java</div>
              
              <div><ArrowRightOutlinedIcon />Spring</div><br/>

            <div className='text-center'>
            <h6 >Databases </h6>
            </div>
              <div><ArrowRightOutlinedIcon />MySQL</div>
             
              <br/>
            
            

          </div>

          <div className="col col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4  pt-3" id="colm3">

            <div className='text-center'>
            <h5 >Tools </h5><br/>
            </div>
              <div><ArrowRightOutlinedIcon />VS Code</div>
              
              <div><ArrowRightOutlinedIcon />IntelliJ</div>
              
              <div><ArrowRightOutlinedIcon />Git</div>
              
              
              <br/>
            
            

          </div>
        </div>
      </div>
      


      


      
    </div>

  )
}

export default Skills