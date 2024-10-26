import gtec from "./Images/gtec.png";
import Nav from "./Nav";
import call from "./Images/call.svg";
import MapIcon from '@mui/icons-material/Map';
import { ReactGoogleReviews } from "react-google-reviews";
import { Box } from "@mui/material";
import CallIcon from '@mui/icons-material/Call'; import { mainNumber, subNumber, address } from "/public/Course"
import { useMediaQuery } from 'react-responsive'


function Address() {
  const isTablet = useMediaQuery({ query: '(max-width:950px)' })
  return (
    <Box className={isTablet ? "left footer-Tab" : "left"}>
      <Box>
        <a href="" className="logo">
          <img src={gtec} alt="G-TEC LOGO" />
        </a>

        <Box className="address">
          <MapIcon sx={{ color: "#009dec", width: "3rem", height: "3rem", paddingRight: "10px" }} />
          <Box component={"address"} width={"10rem"}>
            {address}
          </Box>
        </Box>

        <Box>
          <CallIcon sx={{ color: "#009dec", width: "3rem", height: "3rem" }} />
          <Box className="call">
            <a className="phno" href={`tel:${mainNumber}`}>
              {mainNumber}
            </a>
            <a className="phno" href={`tel:${subNumber}`}>
              {subNumber}
            </a>
          </Box>
        </Box>
      </Box>
      <Box className={isTablet ? "mainlink-Tab" :"mainlink"}>
        <h3>Main Links</h3>
        <Nav />
      </Box>

      <Box className={isTablet ? "Google-Review-Tab":"Google-Review"}>
        <ReactGoogleReviews
          layout={"badge"}
          featurableId="a6937548-a640-49ff-9ffd-bcbf3ee74fc1"
        />
        <img src="/public/Location review-pana.png" alt="" />
      </Box>
    </Box>
  );
}

export default Address;
