import React from 'react'
import AboutPageWhyAs from '../Posts/AboutPageWhyAs'
import AboutPageOurStrength from '../Posts/AboutPageOurStrength'
import { TitleHook } from '../TitleHook'

function About() {
  TitleHook("About")
  return (
    <>
    <AboutPageWhyAs />
    {/* < AboutPageOurStrength/> */}
    </>
  )
}

export default About