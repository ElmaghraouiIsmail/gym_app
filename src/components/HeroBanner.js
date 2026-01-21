import React from 'react';
import {Box,Stack, Typography,Button} from '@mui/material';
import Banner from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <Box style={{position:"relative"}} >
        <Typography mb={2} sx={{mt:{lg:"160px",xs:"30px"},ml:{lg:"65px",xs:"20px"}}} style={{color:"#FF2625",fontSize:"30px",fontWeight:"600px"}}>
            Fitness Club
        </Typography>
        <Typography  sx={{ml:{lg:"65px",xs:"20px"}}} fontSize="45px" fontWeight="600px">
            Sweat Smile<br></br>And repeat
        </Typography>
        <Typography mb={4} mt={3}  sx={{ml:{lg:"65px",xs:"20px"}}}>
           check out  the most effective exercices
        </Typography>
        <Button p="6px" mb={4}  sx={{ml:{lg:"65px",xs:"20px"}}} style={{padding:"10px"}} color='error' variant='contained'>Explore Exercices</Button>
        <Typography mt={6} sx={{opacity:0.1,
            ml:{lg:"55px",xs:"20px"}
        }} fontSize="200px" color='#FF2625' fontWeight="600px">
            Exercices
        </Typography>
        <img   src={Banner} alt="banner" className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner

