import React,{useState,useEffect} from 'react'
import { Stack,Typography,Box,Button ,TextField} from '@mui/material'
import { exercicesdb,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercice = ({Exercice,setExercice, bodypart, setbodypart}) => {
  const [search, setSearch]=useState('');
  const [BodyParts, setBodyParts]=useState([]);
  useEffect(()=>{
    const searchpart=async()=>{
      const body=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercicesdb);
      setBodyParts(['all',...body]);
    }
    searchpart();
  },[])
  const handleSearch = async () => {
  if (search) {
    const exercicesData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      exercicesdb
    );
    const searchLow=search.toLowerCase();
    const searchData=exercicesData.filter(exercice=> (
      exercice.name.toLowerCase().includes(searchLow)
    ))
    // On met search en minuscules pour comparer correctement
    setSearch('');
    setExercice(searchData);
  }
};

  return (
    <Stack>
      <Typography fontSize="30px" fontWeight="600" style={{textAlign:"center",marginTop:"50px",marginBottom:"30px"}}>
        Awesome Exercices you <br></br>Should Know
      </Typography>
      <Box style={{textAlign:"center"}}>
        <TextField sx={{
          border:"none",
          height:"46px",
          paddingBottom:"40px",
          borderRadius:"4px",
          width:{lg:"500px",xs:"100px"},
          backgroundColor:"#fff"
        }} type='text'
                   placeholder='Search for Exercices'
                   onChange={(e)=> setSearch(e.target.value.toLowerCase())}
                   value={search}
                   
        ></TextField>
        <Button onClick={handleSearch} sx={{width:{lg:"150px",xs:"70px"}}} style={{height:"56px",backgroundColor:"#FF2625",color:"#fff"}}>Search</Button>
      </Box>
      <Box>
        <HorizontalScrollBar data={BodyParts} bodypart={bodypart}  setbodypart={setbodypart}></HorizontalScrollBar>
      </Box>
    </Stack>
  )
}

export default SearchExercice