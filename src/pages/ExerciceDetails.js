import React,{useEffect,useState} from 'react'
import { Box } from '@mui/material'
import Details from '../components/Details'
import ExercicesVideos from '../components/ExercicesVideos'
import SimilairesExercice from '../components/SimilairesExercice'
import { useParams } from 'react-router-dom'
import { exercicesdb,fetchData,options } from '../utils/fetchData'

const ExerciceDetails = () => {
    const [exercicedetails, setExercicedetails]=useState({});
    const [videosDetails, setVideosDetails]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const searchData=async()=>{
           const exerciceData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exercicesdb);
           setExercicedetails(exerciceData);
        const exercicevideos=await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(exerciceData.name)}`,options);
              setVideosDetails(exercicevideos.contents);
                
        }
         searchData();
    },
   
    [id])
  return (
    <Box>
        <Details exerciceDetails={exercicedetails}></Details>
        <ExercicesVideos videosDetails={videosDetails} name={exercicedetails.name}></ExercicesVideos>
        <SimilairesExercice></SimilairesExercice>
    </Box>
  )
}

export default ExerciceDetails