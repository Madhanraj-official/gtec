import { Box, Typography } from '@mui/material'
import React from 'react'
import {AboutUsContent} from '/public/Course'
function AboutLeft() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
        <Typography component={"p"} variant='h1' marginY={"1.3rem"} fontWeight={"bold"} color='#2da5f5'>About Us</Typography>
        <Typography textAlign={"justify"}  maxWidth={"30rem"}>{AboutUsContent} </Typography>
    </Box>
  )
}

export default AboutLeft