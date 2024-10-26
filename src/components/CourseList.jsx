import * as React from 'react';
import Box from '@mui/material/Box';
import CourseCard from './CoursesCard';
import { courseDetails } from '/public/Course';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';



export default function NestedList() {
  const courseTitles =Object.keys(courseDetails )

  const defaultState = courseTitles.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {}); 
  let [DataOpen, setDataOpen] = React.useState({...defaultState});
  // const handleClick = (title) => {
  //   DataOpen[title]=!DataOpen[title]
  //   console.log(DataOpen[title])
    
  //   setDataOpen(DataOpen)

  // };
  const handleClick = (title) => {
    // Create a new object to avoid state mutation
    setDataOpen((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <>

    {courseTitles.map((courseTitle,index1)=><List
      sx={{ width: '100vw', bgcolor: 'background.paper' }}
      key={index1}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={()=>{handleClick(courseTitle)}} >
        <Typography component={"p"} variant='h5' width={"70%"} textAlign={"start"}>{courseTitle}</Typography>
        {(DataOpen[courseTitle])? <ExpandLess sx={{width:"3rem" ,height:"3rem"}} /> : <ExpandMore sx={{width:"3rem" ,height:"3rem"}} />}
      </ListItemButton>
      <Collapse  in={(DataOpen[courseTitle])} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
        <Box sx={{ width: '100vw' ,display:"flex",alignItems:"center",justifyContent:"center" ,flexWrap:"wrap"}}>
      {courseDetails[courseTitle].map(({ Title, Image, cardContent },index) => <CourseCard key={index} onClick={`/course/${index1}/${index}`} contentMainId={index1} contentSubId={index} title={Title} image={Image} cardContent={cardContent} minWidth={100} />)}
    </Box>
        </List>
      </Collapse>
    </List>)}
    </>
  );
}