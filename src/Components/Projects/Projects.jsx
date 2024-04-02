import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Project.css'
import Header from '../Header/Header'
import {CardActions} from '@mui/material'

const Projects = () => {
    
    return (
        <div id="projectsec" className='mt-5'>
            
            <div className="container  d-flex justify-content-center align-items-center " id="cont">
                

                <div className="row p-3 justify-content-center align-items-center">
                <div className='mt-5'>
                <h3 className='text-center '>Projects</h3>
            </div>
            

                    <div className=" col col-12  col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-2" id="colm">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    id="proj1img"
                                    component="img"
                                    height="140"
                                    image="proj3.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Expense Tracker
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        Developed a user-friendly expense tracker to streamline budgeting and savings, alleviating financial stress and enabling efficient long-term planning.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>


                    <div className="col col-12  col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-2">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    id="proj2img"
                                    component="img"
                                    height="140"
                                    image="proj2"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stego-Crypt
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        An application that encodes secret messages into images and encrypts them using a unique key for secure transmission and storage, ensuring confidentiality and data integrity.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>


                    <div className="col col-12  col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-2">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    id="proj3img"
                                    component="img"
                                    height="140"
                                    image="proj1"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Fake Currency Detector
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        A counterfeit currency detection system distinguishes between authentic and counterfeit notes, ensuring financial security and integrity through advanced detection algorithms.

                                    </Typography>
                                </CardContent>
                                
                            </CardActionArea>
                        </Card>
                    </div>

                    


                    


                </div>
            </div>
        </div>
    )
}

export default Projects

