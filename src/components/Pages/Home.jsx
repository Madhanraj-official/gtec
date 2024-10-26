import React, { useState } from "react";
import CourseCard from "../CoursesCard";
import { CourseRunner } from "../CourseRunner";
import { courseDetails, datas, show, homeDisplayImages, DetailForOffer } from '/public/Course';
import { TitleHook } from "../TitleHook";
import { Box, Avatar } from "@mui/material"
import PageIndiacter from "./PageIndicater";
import SimpleSlider from "./PageIndicater1";
import { useMediaQuery } from 'react-responsive'



export function Home() {
  TitleHook("Home")
  const isTablet = useMediaQuery({ query: '(max-width:1354px)' })
  const isMobile = useMediaQuery({ query: '(max-width:841px)' })
  const Items = datas.map(({ Title, Image, cardContent }) => <CourseCard title={Title} onClick={"/course"} image={Image} cardContent={cardContent} />);
  const items = Items.map((item) => ({
    id: crypto.randomUUID(),
    item,
  }));
  return (
    <>
      <Box paddingY={isMobile?"":isTablet?"1rem":"2rem"}>
        {isTablet?<SimpleSlider Content={homeDisplayImages} slidesPerView={3} />:<PageIndiacter Content={homeDisplayImages} slidesPerView={3} />}
      </Box>

      {show ?
        <Box paddingY={isMobile?"":isTablet?"1rem":"2rem"}><SimpleSlider Content={DetailForOffer} slidesPerView={1} /></Box>

        : ""}
      
      <Box
        sx={{
          height: "40rem",
          width: "100vw",
          display: "block",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <CourseRunner items={items} speed={30000} />
      </Box>
    </>
  );
}


export default Home
