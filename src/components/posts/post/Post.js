// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { UserContext } from '../../../context/UserContext';
import { deletePost } from '../../../actions/posts';
import BaseLayout from '../../shared/BaseLayout';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

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

  return (
    <BaseLayout>
      <small>will be stylised later!</small>
      <Typography variant="body2">
        {`${post.dogSize} - ${post.breed}`.toUpperCase()}
      </Typography>
      <Divider />
      <p>before photo</p>
      <p>after photo</p>
      <p>captions</p>
      <Divider />
      <p>post author</p>
      <p>post details</p>
    </BaseLayout>
  );
}

export default Post;
