// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { UserContext } from '../../../Context/UserContext';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  // const dispatch = useDispatch();

  // const { currentId, setCurrentId } = useContext(UserContext);

  // 1. Edit Button
  /*
    When we press the edit button, we will redirect the User to '/edit'/ 
    Before that though, update the currentId so out global context knows which specific post to update.
    That 'edit' page is the <UpdateForm /> page. 

  */

  // 2. Delete Button

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h6>Ind Post</h6>
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
