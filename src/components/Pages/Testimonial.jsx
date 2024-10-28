import React from 'react'
import { TitleHook } from '../TitleHook'
import  Box  from '@mui/material/Box'
import VideoCard from './Card'
import { testimonial } from '/public/Course'
function Testimonial() {
  TitleHook("Testimonial")
  return (
    <>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",}}>
        {testimonial.map(({Url,Title})=>(<VideoCard Url={Url} Title={Title}/>))}
    </Box>
    
    </>
  )
}

export default Testimonial