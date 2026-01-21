import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material';
import Home from './pages/Home';
import ExerciceDetails from './pages/ExerciceDetails';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
const App = () => {
  return (
    <Box width="400px" sx={{width : {xl:"1488px"}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
             <Route path='/exercise/:id' element={<ExerciceDetails/>}></Route>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App