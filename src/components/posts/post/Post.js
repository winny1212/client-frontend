import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
// import { useDispatch } from 'react-redux';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  // const dispatch = useDispatch();

  const [currentId, setCurrentId] = useContext(UserContext);

  // 1. Edit Button
  /*
    When we press the edit button, we will redirect the User to '/edit'/ 
    That 'edit' page is the <UpdateForm /> page. We will give the Update form the currentId
  */

  // 2. Delete Button

  return (
    <div>
      <h6>Ind Post</h6>
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
