import React from 'react'
import { TitleHook } from '../TitleHook'
import CourseCard from '../CoursesCard'
import {affilication} from '/public/Course'
import { Box } from '@mui/material'

function AffilicationAwards() {
  TitleHook("Affilication")

  return (
    <>
    <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
    {
      affilication.map(({name,img,content},index)=><CourseCard key={index} onClick={`/affilication`}viewMore={false} title={name} image={img} height={400} width={400} maxWidth={400} cardContent={content} minWidth={100}/>)
    }</Box>
    
    
    </>
  )
}

export default AffilicationAwards