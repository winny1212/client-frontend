import React from 'react';
import defaultImg from '../../assets/img/diyg_default_img_01.png';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        sx={{
          width: 1 / 3,
          border: `solid 8px #fff`,
          display: { xs: 'none', md: 'block' },
        }}
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="body2">
          {`Dog Size - Dog Breed`.toUpperCase()}
        </Typography>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">Post Author</Typography>
        <Box sx={{ alignItems: 'end' }}>
          <CardActions>
            <Typography variant="body2">
              {new Date(post.createdAt).toDateString()}
            </Typography>
            <IconButton aria-label="like">
              <FavoriteIcon color="accentPink" />
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon color="accentPink" />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
