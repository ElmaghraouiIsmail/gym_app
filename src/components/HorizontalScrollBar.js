import React,{useContext} from 'react'
import { Box,Typography } from '@mui/material'
import Bodypart from './Bodypart'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data,bodypart,setbodypart}) => {
  return (
   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item)=>(
       <Box
  key={String(item.id || item)}
  component="div"
  data-itemid={String(item.id || item)}  // attribut HTML valide
  title={item.id || item}
  m="0 40px"
>
  <Bodypart data={item} setbodypart={setbodypart} bodypart={bodypart} />
</Box>

      

    ))}
   </ScrollMenu>
  )
}

export default HorizontalScrollBar