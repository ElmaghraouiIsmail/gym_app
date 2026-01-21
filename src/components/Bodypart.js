import React from 'react'
import Icon from '../assets/icons/gym.png';
import { Stack,Typography } from '@mui/material';
const Bodypart = ({data,bodypart,setbodypart}) => {
  return (
    <Stack type="button"
            textAlign="center"
            justifyContent="center"
            className='bodyPart-card'
           sx={{borderTop:bodypart===data? '4px solid #ff2625':'',
            borderBottomLeftRadius:"20px",
            backgroundColor:"#fff",
            width:"270px",
            height:"280px",
            gap:"20px",
            cursor:"pointer"
           }} onClick={()=>{setbodypart(data);
            window.scrollTo({top:1000,left:100,behavior:'smooth'})
           }}
           
           >

        <img  src={Icon} alt="gym" style={{width:"40px",height:"40px",marginLeft:"115px"}}></img>
        <Typography>{data}</Typography>
    </Stack>
  )
}

export default Bodypart