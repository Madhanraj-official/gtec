import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {  ArrowForward } from '@mui/icons-material';

export default function CourseCard({image,title,cardContent,maxWidth=500,height=240}) {
  return (
    <Card sx={{ maxWidth,minWidth:400,maxHeight:400,minHeight:500,margin:"20px" }}>
      <CardMedia
        sx={{ height }}
        image={image}
        title={title}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {cardContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/course' ><Button size="small" endIcon={<ArrowForward/>}>View More</Button></Link>
      </CardActions>
    </Card>
  );
}
