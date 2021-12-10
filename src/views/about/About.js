import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AboutImage from '../../assets/img/dogs/home_grooming_02.jpg.jpg';

function About() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={AboutImage}
            alt="diy-grooming"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DIY Grooming
            </Typography>
            <Typography variant="body2" color="text.secondary">
              DIY dog grooming instructions. It can be accessed by the Notting
              Hill neighbourhood community as well as other people interested in
              the DIY dog grooming. Anyone including professional groomers can
              register and share their tips and tricks. Additionally,
              professional dog groomers can promote their services and possibly
              be contacted when their service is needed.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default About;
