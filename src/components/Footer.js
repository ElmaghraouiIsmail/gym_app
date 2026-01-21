import React from 'react'
import { Box, Typography,Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email'; // pour Gmail

const Footer = () => {
  return (
    <Box>
      <Typography style={{fontWeight:'bold',fontSize:'20px',textAlign:'center',color:"black",backgroundColor:'#ffa9a9',marginLeft:"460px",marginRight:'460px',borderRadius:'40px',marginTop:'50px',paddingTop:'10px',paddingBottom:'10px',fontStyle:'italic'}}>
        cantact coatch fitness ismail
      </Typography>
    <Stack ml={10}>
  <a style={{marginTop:'20px',textDecoration:'none',display:'flex',backgroundColor:'#FFE5B3',borderRadius:'30px',marginRight:'900px',paddingTop:'10px',paddingBottom:'5px',paddingLeft:'10px',paddingRight:'10px'}} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <InstagramIcon style={{ color: '#E1306C', fontSize: 30 }} />
    <h5 style={{fontSize:'18px',color:'black',marginTop:'5px',marginLeft:'10px'}}>elmagrhaoui</h5>
  </a>
  <a style={{marginTop:'20px',textDecoration:'none',display:'flex',backgroundColor:'#FFE5B3',borderRadius:'30px',marginRight:'900px',paddingTop:'10px',paddingBottom:'5px',paddingLeft:'10px',paddingRight:'10px'}} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FacebookIcon style={{ color: '#1877F2', fontSize: 30 }} />
    <h5  style={{fontSize:'18px',color:'black',marginTop:'5px',marginLeft:'10px'}}>ismail elmaghraoui</h5>
  </a>
  <a style={{marginTop:'20px',textDecoration:'none',display:'flex',backgroundColor:'#FFE5B3',borderRadius:'30px',marginRight:'900px',paddingTop:'10px',paddingBottom:'5px',paddingLeft:'10px',paddingRight:'10px'}} href="mailto:exemple@gmail.com">
    <EmailIcon style={{ color: '#D44638', fontSize: 30 }} />
    <h5  style={{fontSize:'18px',color:'black',marginTop:'5px',marginLeft:'10px'}}>elmagrhaoui@gmail.com</h5>
  </a>
    </Stack>
    </Box>

  )
}

export default Footer