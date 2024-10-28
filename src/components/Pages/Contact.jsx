import { Box, Typography } from '@mui/material'
import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { TitleHook } from '../TitleHook'
import { MapLink,mainNumber,subNumber,mailId,address } from '/public/Course';
import { useMediaQuery } from 'react-responsive'



function Contact() {
  TitleHook("Contact")
  const isTablet = useMediaQuery({ query: '(max-width: 1354px)' })
  const isMobile = useMediaQuery({query:'(max-width:841px)'})
  const isMobileSmall = useMediaQuery({query:'(max-width:400px)'})
  const iconStyle = {
    backgroundColor: "#2da5f5", fontSize: isMobile?"2rem":isTablet?"4rem":"6rem", borderRadius: "10px", padding: "1rem", color: "white",
  }
  return (
    <>
    <Typography variant={isMobile?"h4":isTablet?"h2":'h1'} component="p" textAlign={"center"}>Contact Us</Typography>
      <Box alignItems={isMobileSmall ? "start":"center"} justifyContent={isMobile ? "start":"center"} display={"flex"} flexDirection={"column"} >
        <Box display={"flex"} marginY={"2rem"} flexDirection={isMobile?"column":"row"}  alignItems={isMobile?"center":"start"}  >
          <MapIcon sx={{...iconStyle,marginTop:"2rem"}} />
          <Typography component={"p"} variant={isMobile?"span":'h5'} padding={"2rem"}  width={isMobileSmall?"80vw":isTablet?"50vw":"25vw"} textAlign={"center"} > <Typography component={"span"} variant={isMobile?"span":'h5'} display={"inline-block"} paddingX={"1rem"} textAlign={"justify"}>{address}</Typography></Typography>
        </Box>
        <Box display={"flex"} marginY={"2rem"} flexDirection={isMobile?"column":"row"} alignItems={isMobile?"center":"start"} > 
          <EmailIcon sx={iconStyle} />
          <Typography component={"a"} textAlign={"center"} width={isMobileSmall?"80vw":isTablet?"50vw":"25vw"}  href={`mailto:${mailId}`}target={"_blank"} color='black' variant={isMobile?"p":'h5'}  padding={"2rem"} paddingX={isMobileSmall?"1.5rem":""}>{mailId}</Typography>
        </Box>
        <Box display={"flex"} marginY={"2rem"} flexDirection={isMobile?"column":"row"} alignItems={isMobile?"center":"start"} >
          <LocalPhoneIcon sx={iconStyle} />
          <Typography component={"p"} variant={isMobile?"span":'h5'} width={isMobileSmall?"80vw":isTablet?"50vw":"25vw"}  textAlign={"center"} padding={"2rem"}> <Typography component={"span"} variant={isMobile?"span":'h5'}>+91{mainNumber}</Typography> , <Typography component={"span"} variant={isMobile?"span":'h5'}>+91{subNumber} </Typography></Typography>
        </Box>
        <Box margin={isMobileSmall?"":"2rem"}>
          <Box component={"iframe"} src={MapLink} style={{ border: "2px solid black", width: isMobileSmall?"100vw":"90vw", height: "70vh" }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Box >
        </Box>
      </Box>
    </>
  )
}

export default Contact