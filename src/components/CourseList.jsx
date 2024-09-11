import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      
      <ListItemButton onClick={handleClick} sx={{ width:"900px"}}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ width:"900px"}}>
            <ListItemIcon>
            </ListItemIcon>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size={6}>
            <span>hai</span>
        </Grid>
        <Grid size={6}>
            <span>hai</span>
        </Grid>
        <Grid size={6}>
            <span>hai</span>
        </Grid>
        <Grid size={6}>
            <span>hai</span>
        </Grid>
      </Grid>
    </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}