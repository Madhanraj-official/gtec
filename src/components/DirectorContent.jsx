import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function DirectorContent() {
  return (
    <>


  <div class="content-blk">

  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        "We provide a quality education with result oriented approach. In G-TEC we emphasize on practical approach to bring out the best. 

We are fully equipped with technology to train our students to compete in ever changing competitive world."
        </Typography>
        <Avatar alt="Remy Sharp" src="" sx={{width:150,height:150}} />
        </CardContent>
    </Card>
   
     <p></p>

  </div>



    <h3>SABIR ALI</h3>

    <span>Director</span> 



    </>
  )
}

export default DirectorContent