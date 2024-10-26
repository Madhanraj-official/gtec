import React from "react";
import "../Css/Footer.css";

import Address from "./Address";
import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <Box component={"footer"}>
      <Address />
      <Typography component={"p"} variant="h6">copyright&copy;Madhanraj official. All Rights Reserved</Typography>
    </Box >
  );
}

export default Footer;
