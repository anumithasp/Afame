import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <h4 className='text-center text-light'>Anumitha S Pradiu</h4>
                    </div>
            </div><br/><br/>
            <div className='row'>
               <div className="col-12">
                        <p className='text-center text-light'><CopyrightIcon/>Anumitha.</p>
                </div>
            </div>
                
                
            </div>
        </footer>
    )
}

export default Footer