import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
const ExercicesVideos = ({videosDetails,name}) => {
  console.log(videosDetails);
   if (!Array.isArray(videosDetails)) {
    return null; // ou un loader
  }
  return (
       <Stack mt={8} style={{backgroundColor:'#FFE5B3',height:'1020px',width:'1200px',borderRadius:'20px',marginLeft:'20px'}}>
       <Box paddingTop={4} ml={10} mt={30}><Typography  color='black' backgroundColor="#ffa9a9" textAlign='center' borderRadius="40px" marginRight="250px" marginLeft="250px" fontSize="25px" fontWeight="bold">Watch&nbsp;<span style={{color:"black",borderRadius:'40px',textAlign:'center',padding:'2px 2px',paddingTop:'10px',paddingBottom:'10px',fontStyle:'italic'}}>{name} </span>&nbsp;<br></br>Exercices Videos
       </Typography> 
       <Stack mt={10} sx={{flexDirection:{lg:'row',xs:'column'},flexWrap:'wrap',gap:'50px'}}>
        {videosDetails.filter(item => item.video && item.video.thumbnails && item.video.thumbnails.length > 0).slice(0,6).map((item,index)=>(
          <a key={index} style={{textDecoration:'none'}}
             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
              <img src={`${item.video.thumbnails[0].url}`} alt={`${item.video.title}`} style={{width:"300px",height:"200px",borderRadius:'10%'}}></img>
              <Typography style={{fontSize:'15px',opacity:0.5}} color='#000'>{item.video.channelName}</Typography>
             </a>
               
        ))}
       
       </Stack>
       
       </Box>
       </Stack>
  )
}

export default ExercicesVideos