import React from 'react';
import defaultImg from '../../assets/img/diyg_default_img_01.png';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        bgcolor: 'background.paper',
        borderRadius: '6px',
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        alt={post.breed}
        image={defaultImg}
        sx={{ width: 1 / 2 }}
      />
      <CardContent>
        <h3>{post.title}</h3>
        <CardActions></CardActions>
      </CardContent>
    </Card>
  );
};

export default PostCard;
