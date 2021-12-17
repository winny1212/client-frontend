import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import defaultImg from '../../assets/img/diyg_default_img_01.png';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea } from '@mui/material';

// <Link to={`/post/${post._id}`} className="link">

const PostCard = ({ post }) => {
  // const { postID } = useParams();
  console.log('--', post);
  // console.log(`postID: ${postID}`);
  console.log(`post._id: ${post._id}`);

  return (
    // LINK TO SINGLE POST to="/about" will be updated!
    <CardActionArea component={RouterLink} to={`/posts/${post._id}`}>
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
          image={post.image.before || defaultImg}
          sx={{
            width: 1 / 3,
            border: `solid 8px #fff`,
            display: { xs: 'none', md: 'block' },
          }}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="body2">
            {`${post.dogSize} - ${post.breed}`.toUpperCase()}
          </Typography>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">Post Author</Typography>
          <Box sx={{ alignItems: 'end' }}>
            <CardActions sx={{ px: 0 }}>
              <Typography variant="body2">
                {new Date(post.createdAt).toDateString()}
              </Typography>
              <Box>
                <FavoriteIcon color="accentPink" />
                <CommentIcon color="accentPink" />
              </Box>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default PostCard;
