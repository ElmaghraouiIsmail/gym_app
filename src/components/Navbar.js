import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
const Navbar = () => {
  return (
   <Stack direction="row" sx={{gap:{lg:"160px" ,xs:"30px"},mt:{lg:"60px",xs:"40px"},ml:{lg:"30px",xs:"20px"}}}>
    <Link>      
    <img src={Logo} alt="logo" width="48px" height="48px"></img>
    </Link>
    <Stack direction="row" sx={{gap:{lg:"50px" ,xs:"30px"},mt:{lg:"30px" ,xs:"20px"}}}
     >
      <Link to="/" style={{color:"#3F1212",borderBottom:"3px solid #FF2625",textDecoration:"none",fontSize:"20px"}}>Home</Link>
      <a href='#exercice' style={{color:"#3F1212",textDecoration:"none",fontSize:"20px"}}>Exercices</a>
    </Stack>
   </Stack>
  )
}

export default Navbar