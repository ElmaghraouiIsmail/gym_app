import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'


const ExerciceCard = ({exercise}) => {
  return (
    <div>
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
         <img  src={`/gifs/${exercise.id}.gif`}></img>
         <Stack direction='row'>
          <Button sx={{ml:{lg:"21px",color:"#fff",backgroundColor:"#ffa9a9",
            borderRadius:"21px",textDecoration:"Capitalize"
          }}}>{exercise.bodyPart}</Button>
          <Button sx={{ml:{lg:"21px",color:"#fff",backgroundColor:"#fcc757",
            borderRadius:"21px",textDecoration:"Capitalize"}}}>{exercise.target}</Button>
         </Stack>
         <Typography style={{fontWeight:"bold",color:"black",fontSize:"20px",paddingTop:"20px",paddingLeft:"20px"}}>{exercise.name}</Typography>
        </Link>
    </div>
  );
}

export default ExerciceCard;

