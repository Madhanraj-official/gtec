import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import imgs from "./Images/bg.jpg"
import { useMediaQuery } from 'react-responsive'
import {DirectorName,DirectorSlogan} from "/public/Course"

function DirectorContent() {
  const isTablet = useMediaQuery({ query: '(max-width: 1354px)' })
  const isMobile = useMediaQuery({ query: '(max-width:552px)' })
  const ramya = useMediaQuery({ query: "(max-width:1530px)" })
  return (
    <>
      <Box sx={{ position: "relative", marginBottom: "5vh", marginTop: "1vh",overflow:"visible" }}>
        <Card sx={{ minWidth: 275, backgroundColor: "#2da5f5", width: isMobile ? "100vw" : "95vw", borderRadius: "0" }}>
          <CardContent sx={{ height: isMobile ? "50vh" : isTablet ? "40vh" : "35vh", position: "relative" }}>
            <Typography variant={isTablet ? "h4" : 'h3'} component={"p"} textAlign={isTablet ? "center" : ""} sx={{ color: "white", position: "absolute", top: "3vh", left: "7vw" }}>Director’s<Typography variant={isTablet ? "h4" : 'h3'} component={"span"} sx={{ fontWeight: "bolder" }}> MESSAGE</Typography></Typography>
            <Typography gutterBottom sx={{ color: 'white', fontSize: isMobile ? 14 : isTablet ? 16 : 18, position: "absolute", left: isTablet ? "0" : "25vw", top: "15vh", marginX: "10vh" }}>
              {DirectorSlogan}
            </Typography>
            
          </CardContent>
        </Card>
        <Box sx={
          {
            position: "absolute", bottom: isMobile ? "-16vh" : isTablet ? "-22vh" : "-10vh",
            left: isMobile ? "22%" : isTablet ? "30%" : "10vw"
          }
        }>
        <Avatar alt="" src={imgs} sx={{ width: isMobile ? 200 : 250, height: isMobile ? 200 : 250, border: "3vh solid", borderColor: "rgba(255, 255, 255, 0.1)" }} />
        </Box>

      </Box>
      <Box height={isTablet?"40vh":"20vh"} display={"flex" } flexDirection={"column"}  alignItems={isMobile?"center":isTablet?"end":"center"} justifyContent={isTablet?"center":"start"} width={"100vw"}>
          <Typography component={"p"} variant='h3'color="#2da5f5" paddingRight={isMobile?"":"9rem"} paddingTop={isTablet?"3rem":""}>{DirectorName}</Typography>
          <Typography component={"p"} variant='h3'paddingRight={isMobile?"":"8rem"}>Director</Typography>
      </Box>
    </>
  )
}

export default DirectorContent