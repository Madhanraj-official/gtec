import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive'

export default function CourseCard({ image, title, cardContent, onClick,viewMore=true, minWidth = 400, maxWidth =  500, height = 240 ,width="100%"}) {
  
  const isTablet = useMediaQuery({ query: '(max-width: 500px)' })
  maxWidth = isTablet ? 300 : maxWidth
  return (
    <Link to={onClick}>
      <Card sx={{width, maxWidth, minWidth, maxHeight: 600, minHeight: 600, margin: "20px" }} >
        <CardMedia
          component={"img"}
          sx={{ height ,objectFit:"fill"}}
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

        {viewMore?<CardActions>
          <Button size="small" endIcon={<ArrowForward />}>View More</Button>
        </CardActions>:""}
      </Card>
    </Link>
  );
}
