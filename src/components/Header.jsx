import React from "react";
import style from "../Css/Header.module.css";
import gtec from "./Images/gtec.png";
import Popup from "reactjs-popup";
import Enquiry from "./Pages/Enquiry";
import calling from "./Images/calling.svg";
import whatsapp from "./Images/whatsapp.svg";
import Nav from "./Nav";
import NavBar from "./NavBar";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from 'react-responsive'
import {mainNumber,headerContent} from "/public/Course"
import CallIcon from '@mui/icons-material/Call';
import { NavLink } from "react-router-dom";
function Header() {

    const isTablet = useMediaQuery({ query: '(max-width: 1354px)' })
    const isMobile = useMediaQuery({query:'(max-width:409px)'})
  return (
    <Box component={"header"} className={style.Hearder}>
      <NavLink to={"/"}>
        <Box component={"img"} src={gtec} alt="G-TEC LOGO" />
      </NavLink>
      <Box component={"div"} className={style.container}>
      {isTablet?<NavBar/>:<Nav />} 
      { isTablet?<></>:<Typography component={"a"} className="phno" color="black" href={`tel:${mainNumber}`} display={"inline-flex"} justifyContent={"center"} >
          <CallIcon sx={{paddingRight:"5px"}}/>
          <Typography component={"span"} display={"inline-block"} height={"1rem"} fontWeight={"bold"}>
            {mainNumber}
          </Typography>
          
        </Typography>}
      </Box>
      <Typography variant="h3" component={"p"} className={isMobile?style.p2:isTablet?style.p1:style.p}>{headerContent}</Typography >
      <Box component={"div"} className="">
        <Box component={"div"} className="countact">
          <Typography component={"a"} href={`https://wa.me/+91${mainNumber}`} className={style.whatsapp}>
            <Box component={"img"} src={whatsapp} alt="Whatsapp" />
          </Typography>
          <Typography component={"a"} href={`tel:${mainNumber}`} className={style.call}>
            <Box component={"img"} src={calling} alt="Call" />
          </Typography>
        </Box>
        <Box component={"div"} className={style.enquiry_btn} >
          <Popup
            trigger={<button className={style.Enquiry_btn} style={{zIndex:"100"}}>QUICK ENQUIRY</button>}
            modal
            nested
          >
            {(close) => (
              <Box component={"div"} className="modal">
                <Enquiry />
              </Box>
            )}
          </Popup>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
