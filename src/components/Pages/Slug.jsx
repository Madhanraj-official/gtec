import React from 'react'
import { useParams } from 'react-router-dom'
import { courseDetails, keys } from '/public/Course'
import Popup from "reactjs-popup";
import Apply from "./Apply";
import { TitleHook } from '../TitleHook'
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive'


function Slug() {
  const isTablet = useMediaQuery({ query: '(max-width:1354px)' })
  const isMobile = useMediaQuery({ query: '(max-width:841px)' })
  const isMobileSmall = useMediaQuery({ query: '(max-width:500px)' })
  const { categoryId, courseId } = useParams()
  const slugData = courseDetails[keys[categoryId]][courseId]
  TitleHook(slugData["Title"])
  return (
    <>
      <Typography textAlign={"center"} component={"p"} variant={isTablet?"h3":'h1'}>{slugData["Title"]}</Typography>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"2rem"}><Avatar src={slugData["Image"]} variant={"rounded"} sx={{ width: isMobileSmall ? "20rem": isMobile?"25rem" :isTablet? "40rem":"50rem", height: isMobile?"10rem" :isTablet? "25rem":"30rem" }} /></Box>
      <Box width={"100vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Typography margin={"2rem"} sx={{ width: "80vw" }} textAlign={"justify"} component={"p"} variant='h5'>{slugData["cardContent"]}</Typography></Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"2rem"}>
        <Popup
          trigger={<Button variant={"contained"} sx={{ width: "20vw", height: "10vh", fontSize: isMobile?"1rem" : isTablet?"1.5rem":"2rem" }} className="" style={{ zIndex: "100" }}>Apply Now</Button>}
          modal
          nested
        >
          {(close) => (
            <Box className="modal">
              <Apply courseName={slugData["Title"]} />
            </Box>
          )}
        </Popup>
      </Box>
    </>
  )
}

export default Slug