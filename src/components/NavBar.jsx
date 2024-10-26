

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { mainNumber } from "/public/Course"

export default function NavBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 220, backgroundColor: "#2da5f5", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{ "name": "Home", "link": "/" },
        { "name": "About Us", "link": "/about" },
        { "name": "Courses", "link": "/course" },
        { "name": "Affiliations", "link": "/affilication" },
        { "name": "Testimonials", "link": "/testimonial" },
        { "name": "Placement", "link": "/placement" },
        { "name": "Contact", "link": "/contact" },
        { "name": `${mainNumber}`, "link": `tel:${mainNumber}` }].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Typography component={"p"} variant='h6' color='primary'><NavLink style={{ display: "block", width: "10em", padding: "10px" }} to={text.link}>{text.name}</NavLink><Divider /></Typography>

          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <div style={{ position: "absolute", right: "0" }}>
      {['right'].map((anchor) => (
        <React.Fragment key={"right"}>
          <Button onClick={toggleDrawer("right", true)} color='#fff' sx={{ position: "relative", right: "0px" }}><MenuIcon /></Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}