import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import { deletePost } from '../../../actions/posts';
import BaseLayout from '../../shared/BaseLayout';
import StepView from './StepView';
import Hr from '../../shared/Hr';
import usersData from '../../../data/usersData';
// import { format } from 'date-fns';
import { pxToRem, getDate } from '../../../utils/general';
import ProGroomer from '../../shared/ProGroomer';
import IconText from '../../shared/IconText';
import { StyledBtn } from '../../shared/StyledButtons';
import { checkDuration, capitalise } from '../../../utils/postUtils';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Image from '../../shared/Image';
import Avatar from '@mui/material/Avatar';
import TimelapseTwoToneIcon from '@mui/icons-material/TimelapseTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import List from '@mui/material/List';

import Contact from '../../../modals/Contact';

import { useDispatch } from 'react-redux';
import { getAuthor } from '../../../actions/auth';

function Post({ post }) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const user = await dispatch(getAuthor(post.authorId));
      // console.log(res.data);
      setAuthor(user);
    };
    getUser();
    // cleanup
    return () => {
      setAuthor({});
    };
  }, [post.authorId, dispatch]);

  // Get the User - we will use to assign it to post.
  const currentUserLocal = JSON.parse(localStorage.getItem('profile'));
  const currentUser = currentUserLocal?.result?._id;
  // This code below will check if certain users can Delete if u need to do that.
  // user?.result?._id === post?.authorId;

  // console.log('POST is:', post);
  console.log('POST user ID is:', post.authorId);
  console.log('AUTHOR: ', author);
  console.log('CURRENT USER ID:', currentUser);

  // 2. Delete Button
  // const dispatch = useDispatch();
  // On the onClick Button, we will dispatch the following.
  // dispatch(deletePost(post._id))

  // ! Issues with date-fns ISO date error...
  // const dateFormat = 'EEE, do LLLL yyyy';
  // const postDate = post.createdAt;
  // console.log('DATE---', postDate);

  return (
    <>
      <Container maxWidth="lg">
        <Hr>
          {post.dogSize && (
            <Chip
              variant="outlined"
              color="primary"
              label={`${post.dogSize} ${post.breed}`.toUpperCase()}
            />
          )}
        </Hr>

        {!(post.image?.before && post.image?.after) ? (
          <>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Image
                  src={post.image?.before || post.image?.after}
                  alt="post photo"
                />
              </Grid>
            </Grid>
            <Hr />
          </>
        ) : (
          <>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Image
                  src={post.image?.before}
                  alt={`${post.dogSize} ${post.breed} before grooming`}
                  caption="Before"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={post.image?.after}
                  alt={`${post.dogSize} ${post.breed} after grooming`}
                  caption="After"
                />
              </Grid>
            </Grid>
            <Hr />
          </>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <Stack direction="row" spacing={2}>
            <Avatar alt={author?.username} src={author?.avatar} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography
                component="h3"
                variant="author"
                sx={{ marginRight: 'auto' }}
              >
                by {author?.username}
              </Typography>
              {author?.proGroomer && <ProGroomer />}
            </Box>
          </Stack>

          {currentUser && currentUser === author?._id && (
            <Box sx={{ alignSelf: 'center', marginLeft: 'auto' }}>
              <StyledBtn size="small" href={`edit/${post._id}`}>
                Edit Post
              </StyledBtn>
            </Box>
          )}
        </Stack>
        <Hr />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 0.85, md: 3 }}
          justifyContent="space-between"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ mb: 3 }}
        >
          <IconText label={getDate(post.createdAt)} fontSize="small">
            <EventNoteTwoToneIcon color="secondary" />
          </IconText>

          <IconText
            label={`Grooming Time: ${checkDuration(post?.duration)}`}
            fontSize="small"
          >
            <TimelapseTwoToneIcon color="secondary" />
          </IconText>

          <Contact author={author} />
        </Stack>

        <Grid container spacing={2} mt="2.5rem">
          <Grid item xs={12} md={12} sx={{ mb: 1 }}>
            {post.description && (
              <Typography
                variant="bodyIntro"
                sx={{ fontSize: { xs: pxToRem(18), md: pxToRem(22) } }}
              >
                {post.description}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} md={9}>
            <>
              <Typography component="h2" variant="subtitle3" sx={{ my: 1.5 }}>
                Instructions
              </Typography>
              <List>
                {post.steps?.map((step, index) => (
                  <StepView step={step} key={step.id} index={index} />
                ))}
              </List>
            </>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography component="h3" variant="subtitle3" sx={{ my: 1.5 }}>
                Recommended Tools
              </Typography>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {post.tools?.map((tool, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    label={tool.toUpperCase()}
                    sx={{ p: 1.25, m: 0.35 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* VIDEO FEATURE TO BE ON HOLD */}
          {/* <Grid item xs={12} md={6}>
            <p>Video</p>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default Post;
