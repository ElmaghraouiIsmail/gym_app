import React,{useContext} from 'react'
import { Box,Typography } from '@mui/material'
import Bodypart from './Bodypart'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import {VisibilityContext} from 'react-horizontal-scrolling-menu';
import Scrollbar from './Scrollbar';

const HorizontalScrollBar = ({data,bodypart,setbodypart}) => {
  return (
     <Scrollbar className='parts'>
    {data.map((item)=>(
        <div key={item}>
            <Bodypart data={item}></Bodypart>
        </div>
    ))}
    </Scrollbar>
  )
}

export default HorizontalScrollBar