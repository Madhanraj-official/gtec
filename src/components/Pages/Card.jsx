import React from 'react'
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
function VideoCard({Url,Title}) {
    return (
        <>
            <Card raised={true} sx={{ height:"700px",width:"360px", margin: "10px",backgroundColor:"#2da5f5" }}>
                <CardActionArea >
                    <CardMedia
                        component={"iframe"}
                        width="360px"
                        height="640px"
                        src={Url}
                        controls
                        title="Gtec Mayiladuthurai Testimonial"
                        frameborder="0"
                    />
                    <CardContent>
                        <Typography variant={"subtitle1"} fontWeight={"bold"} color="black" component="p">
                            {Title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default VideoCard