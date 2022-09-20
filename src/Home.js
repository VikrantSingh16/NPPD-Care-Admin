import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import { Container, Card, Button, CardGroup } from 'react-bootstrap';
import doctor from "./doctor.png"

import './App.css'
export const Home = () => {
  return (
    <div className="home">
      <center>
        
        <img src={logo}></img>
        <div>
         
        <br></br>

        <Link className='link' style={{textDecoration:"none",color:'white',fontSize:"40px",height:'200px',width:'200px',}} to="/TrainerComponent">Trainer Data</Link>
        
        <br></br>
        <Link className='link' style={{textDecoration:"none",color:'white',fontSize:"40px",height:'200px',width:'200px'}} to="/InternComponent">Intern Data</Link>
        <br></br>
        
        <Link className='link' style={{textDecoration:"none",color:'white',fontSize:"40px",height:'200px',width:'200px'}} to="/DoctorComponent">Doctor Data</Link>
       
        
        <br></br>
        <Link className='link' style={{textDecoration:"none",color:'white',fontSize:"40px",height:'200px',width:'200px'}} to="/ClientComponent">Client Data</Link>
       
        </div>
        </center>
      
    </div>
  )
}
