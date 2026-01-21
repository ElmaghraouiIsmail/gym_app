import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material/Pagination'
import { Stack,Typography,Box} from '@mui/material'
import { exercicesdb,fetchData } from '../utils/fetchData'
import ExerciceCard from './ExerciceCard'
const Exercices = ( {setExercice,bodypart,Exercice}) => {
  
  useEffect(()=>{
    const exercieData=async()=>{
      let exerciceData=[];
      if(bodypart==='all'){
      exerciceData=await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
            exercicesdb);
         }
       else{
         const exercicesDatasearch=await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
            exercicesdb);
             exerciceData=exercicesDatasearch.filter(exercice=> (
      exercice.name.toLowerCase().includes(bodypart)
    ))
        }
        setExercice(exerciceData);
        
    }
    exercieData();
  },[bodypart])
  return (
    <Box sx={{mt:{lg:"110px"}
         ,mt:"50px"
         ,p:"20px"}}>
     <Typography variant="h3" mb="46px">Showing Results</Typography>
     <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}}
     justifyContent="center" flexWrap="wrap">
      {Exercice.map((exercice,index)=>(
        <ExerciceCard key={index} exercise={exercice}></ExerciceCard>
      ))}
     </Stack>
    </Box>
  )
}

export default Exercices