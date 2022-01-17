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
import { checkDuration } from '../../../utils/postUtils';

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
import { capitalize } from '@mui/material';
import TimelapseTwoToneIcon from '@mui/icons-material/TimelapseTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import List from '@mui/material/List';

import Contact from '../../../modals/Contact';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}
import { useDispatch } from 'react-redux';
import { getAuthor } from '../../../actions/auth';

function Post({ post }) {
  const dispatch = useDispatch();
  // const { currentId, setCurrentId } = useContext(UserContext);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const user = await dispatch(getAuthor(post.authorId));
      // console.log(res.data);
      setAuthor(user);
    };
    getUser();
  }, [post.authorId, dispatch]);

  console.log('POST is:', post);
  console.log('POST user ID is:', post.authorId);
  console.log('AUTHOR: ', author);

  // 1. Edit Button
  /*
    When we press the edit button, we will redirect the User to '/edit'/ 
    Before that though, update the currentId so out global context knows which specific post to update.
    That 'edit' page is the <UpdateForm /> page. 

  */

  // 2. Delete Button
  // const dispatch = useDispatch();
  // On the onClick Button, we will dispatch the following.
  // dispatch(deletePost(post._id))

  // ! Issues with date-fns ISO date error...
  // const dateFormat = 'EEE, do LLLL yyyy';
  // const postDate = post.createdAt;
  // console.log('DATE---', postDate);

  const fakeUser = usersData[1];

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

        <Stack direction="row" spacing={2}>
          <Avatar alt={author?.username} src={author?.avatar} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Typography component="h3" variant="author">
              by {author?.username}
            </Typography>
            {post.proGroomer && <ProGroomer />}
          </Box>
        </Stack>
        <Hr />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 0.25, md: 3 }}
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

        <Typography component="h2" variant="h5" sx={{ mb: 1.5 }}>
          Instructions
        </Typography>
        <Grid container spacing={2}>
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
          <Grid item xs={12} md={10}>
            <List>
              {post.steps?.map((step, index) => (
                <>
                  <StepView step={step} key={step.id} index={index} />
                </>
              ))}
            </List>
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
