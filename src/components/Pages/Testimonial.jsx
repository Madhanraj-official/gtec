import React from 'react'
import { TitleHook } from '../TitleHook'
import  Box  from '@mui/material/Box'
import VideoCard from './Card'

function Testimonial() {
  TitleHook("Testimonial")
  return (
    <>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",}}>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
    </Box>
    
    </>
  )
}

export default Testimonial