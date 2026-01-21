import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
import bodyimage from '../assets/icons/body-part.png'
import targetimage from '../assets/icons/target.png'
import equipementimage from '../assets/icons/equipment.png'
const Details = ({ exerciceDetails}) => {
  return (
    <Stack sx={{flexDirection: { xs: 'column', lg: 'row' },justifyContent:'center',gap:"40px", flexWrap: 'nowrap'}}>
    <Box>
    <img style={{marginLeft:"60px",marginTop:"50px",width:"550px",height:"550px"}} src={`/gifs/${exerciceDetails.id}.gif`} alt={exerciceDetails.name}></img>
    </Box>
    <Box>
    <Typography style={{marginRight:"100px",fontWeight:'bold',fontSize:'40px'}}>{exerciceDetails.name}</Typography>
    <Typography style={{marginRight:"100px",opacity:0.5,width:"300px",paddingTop:"20px"}}>{exerciceDetails.description}</Typography>
    <Box mt={5} sx={{ gap:"11px",display: 'flex', flexDirection:{lg:"row"},flexWrap:"nowrap"}}>
        <Box><img style={{width:"56px",height:"56px",backgroundColor:"#fcc757",borderRadius:"50%",opacity:0.4}} src={bodyimage}></img></Box>
        <Typography style={{marginTop:"20px",marginLeft:"10px"}}>{exerciceDetails.bodyPart}</Typography>
    </Box>
    <Box mt={2}  sx={{ gap:"11px",display: 'flex', flexDirection:{lg:"row"},flexWrap:"nowrap"}}>
        <img style={{width:"56px",height:"56px",backgroundColor:"#fcc757",borderRadius:"50%",opacity:0.4}} src={targetimage}></img>
        <Typography style={{marginTop:"20px",marginLeft:"10px"}}>{exerciceDetails.target}</Typography>
    </Box>
    <Box mt={2}  sx={{ gap:"11px",display: 'flex', flexDirection:{lg:"row"},flexWrap:"nowrap"}}>
        <img style={{width:"56px",height:"56px",backgroundColor:"#fcc757",borderRadius:"50%",opacity:0.4}}  src={equipementimage}></img>
        <Typography style={{marginTop:"20px",marginLeft:"10px"}}>{exerciceDetails.equipment}</Typography>
    </Box>
    </Box>
    </Stack>
  )
}

export default Details