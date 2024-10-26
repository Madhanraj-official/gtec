import React, { useState } from 'react'
import CourseList from '../CourseList'
import { TitleHook } from '../TitleHook'
 function Course() {
  TitleHook("Courses")
  return (
    <>
    <CourseList />
    
    </>
  )
}

export default Course