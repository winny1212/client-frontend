import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import defaultImg from '../../assets/img/diyg_default_img_01.png';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getShortDate } from '../../utils/general';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea } from '@mui/material';

// <Link to={`/post/${post._id}`} className="link">
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions/posts';
import { getAuthor } from '../../actions/auth';
import ProGroomer from '../shared/ProGroomer';

const PostContainer = styled.div`
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const PostCard = ({ post }) => {
  // Dispatch needed for Liking Post and commenting on it.
  const dispatch = useDispatch();

  const users = useSelector((state) => state.profileReducer);

  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const user = await dispatch(getAuthor(post.authorId));
      setAuthor(user);
    };
    getUser();
  }, [post.authorId, dispatch]);

  console.log(author);

  return (
    // LINK TO SINGLE POST to="/about" will be updated!
    <CardActionArea component={RouterLink} to={`/posts/${post._id}`}>
      <PostContainer>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            bgcolor: 'background.paper',
            borderRadius: '6px',
            height: 205,
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            alt={post.breed}
            image={post.image?.before || defaultImg}
            sx={{
              width: '150px',
              border: `solid 8px #fff`,
              display: { xs: 'none', md: 'block' },
            }}
            onError={(e) => (e.target.src = defaultImg)}
          />
          <CardContent
            sx={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              p: { xs: 2.5, md: '0.5rem' },
              pr: { md: '0.85rem' },
              pt: { md: '0.85rem' },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="tinyOverTitle" sx={{ pb: '0.25rem' }}>
                {`${post.breed}`.toUpperCase()}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.45rem', md: '1.15rem' },
                  pb: '0.25rem',
                }}
              >
                {post.title}
              </Typography>
              <Stack direction="row" spacing={0}>
                {author?.proGroomer && <ProGroomer icon />}
                <Typography variant="body2" sx={{ pt: 0.2 }}>
                  By {author?.username}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ alignContents: 'flex-end' }}>
              <CardActions
                sx={{
                  px: 0,
                  pb: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="caption">
                  {getShortDate(post.createdAt)}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  {/* <FavoriteIcon
                    color="accentPink"
                    onClick={() => dispatch(likePost(post._id))}
                  /> */}
                  {post?.comments?.length > 0 && (
                    <>
                      <Typography variant="caption" sx={{ mx: 1 }}>
                        {post?.comments?.length}
                      </Typography>
                      <CommentIcon color="accentPink" size="small" />
                    </>
                  )}
                </Box>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </PostContainer>
    </CardActionArea>
  );
};

export default PostCard;
