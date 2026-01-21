import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercice from '../components/SearchExercice';
import Exercices from '../components/Exercices';
export default function Home() {
   const [Exercice, setExercice]=useState([]);
   const [bodypart, setbodypart]=useState('all');
   console.log(bodypart);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercice Exercice={Exercice} setExercice={setExercice} bodypart={bodypart} setbodypart={setbodypart}/>
        <Exercices  setExercice={setExercice} bodypart={bodypart} Exercice={Exercice}/>
    </Box>
  )
}
