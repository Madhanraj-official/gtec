import { Box, Typography } from '@mui/material'
import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { TitleHook } from '../TitleHook'
import { MapLink,mainNumber,subNumber,mailId,address } from '/public/Course';

function Contact() {
  TitleHook("Contact")
  const iconStyle = {
    backgroundColor: "#2da5f5", fontSize: "6rem", borderRadius: "10px", padding: "1rem", color: "white"
  }
  return (
    <>
      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} width={"99vw"} marginLeft={"1rem"}>
        <Typography variant='h1' component="p" margin={"2rem"}>Contact Us</Typography>
        <Box display={"flex"} flexDirection={"row"} margin={"2rem"} marginLeft={"5rem"} width={"40vw"}>
          <MapIcon sx={iconStyle} />
          <Typography component={"p"} variant='h5' padding={"2rem"} textAlign={"justify"} width={"25vw"}>{address}</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} margin={"2rem"} marginLeft={"5rem"} width={"40vw"}> 
          <EmailIcon sx={iconStyle} />
          <Typography component={"a"}textAlign={"justify"}  href={`mailto:${mailId}`}target={"_blank"} color='black' variant='h5' width={"40vw"} padding={"2rem"}>{mailId}</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} margin={"2rem"} marginLeft={"5rem"} width={"40vw"}>
          <LocalPhoneIcon sx={iconStyle} />
          <Typography component={"p"} variant='h5' textAlign={"justify"} width={"25vw"} padding={"2rem"}>+91 {mainNumber} , +91 {subNumber} , </Typography>
        </Box>
        <Box>
          <iframe src={MapLink} style={{ border: "2px solid black", width: "70vw", height: "70vh" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </Box>
    </>
  )
}

export default Contact