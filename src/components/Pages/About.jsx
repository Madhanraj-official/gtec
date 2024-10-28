import React from 'react'
import AboutPageWhyAs from '../Posts/AboutPageWhyAs'
import AboutPageOurStrength from '../Posts/AboutPageOurStrength'
import { TitleHook } from '../TitleHook'
import { Box } from '@mui/material'
import AboutLeft from '../Posts/AboutLeft'
import AboutRight from '../Posts/AboutRight'
import { useMediaQuery } from 'react-responsive'


    
function About() {
  TitleHook("About")
  const isTablet = useMediaQuery({ query: '(max-width: 1500px)' })
  return (
    
    <Box display={"flex"} justifyContent={isTablet ? "center" :"space-evenly"} alignItems={isTablet ? "center" :"start"} flexDirection={isTablet ? "column" :"row"}>
      <Box width={"50vw"} margin={"2rem"}><AboutLeft/></Box>
      <Box width={"50vw"} margin={"2rem"}><AboutRight/></Box>

    </Box>
    
  )
}

export default About