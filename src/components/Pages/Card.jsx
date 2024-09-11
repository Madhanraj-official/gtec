import React from 'react'
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import video from '../Images/mov_bbb.mp4'
function VideoCard() {
  return (
    <>
    <Card  raised={true} sx={{width:"230px",height:"400px",margin:"10px"}}>
    <CardHeader
        title=""
        sx={{width:"500px"}}
    />

    <CardActionArea sx={{width:"500px"}}>
        <CardMedia
            component='video'
            sx={{width:"500px"}}
            image={video}
            controls
        />
        <CardContent>

            <Typography variant="h6" color="textSecondary" component="p">
                Some Text
            </Typography>
        </CardContent>
    </CardActionArea>
</Card>
</>
  )
}

export default VideoCard