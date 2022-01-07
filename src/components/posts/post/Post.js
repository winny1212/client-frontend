// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { UserContext } from '../../../context/UserContext';
import { deletePost } from '../../../actions/posts';
import BaseLayout from '../../shared/BaseLayout';
import Hr from '../../shared/Hr';
import usersData from '../../../data/usersData';

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

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  // const { currentId, setCurrentId } = useContext(UserContext);

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

  const fakeUser = usersData[1];

  return (
    <>
      <Hr>
        {post.dogSize && (
          <Chip
            variant="outlined"
            color="primary"
            label={`${post.dogSize} ${post.breed}`.toUpperCase()}
          />
        )}
      </Hr>
      {post.image && (
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
        <Avatar alt={fakeUser.username} src={fakeUser.avatar} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
          }}
        >
          <Typography component="h3" variant="author">
            by {capitalize(fakeUser.username)}
          </Typography>
          {fakeUser.proGroomer && <p>pro groomer</p>}
        </Box>
      </Stack>
      <Hr />

      <p>Instructions</p>
      <p>Video</p>
    </>
  );
}

export default Post;
