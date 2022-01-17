import React, { useState, useRef, useEffect } from 'react';

// Material UI
import { TextField, Typography, Button } from '@mui/material';

import useStyles from './styles';

// State
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import styled from 'styled-components'
import { CommentBankSharp } from '@mui/icons-material';




const CommentSection = ({ postID, post }) => {
  // Comments take a while to load
  useEffect(() => {
    setComments(post.comments);
  }, [post?.comments]);

  // Get dispatch
  const dispatch = useDispatch();

  // Get styles
  const classes = useStyles();

  // Get User
  const user = JSON.parse(localStorage.getItem('profile'));
  const commentsRef = useRef(null);

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');

  const handleClick = async () => {
    const formatComment = `${user?.result?.username}: ${comment}`;

    const newComments = await dispatch(commentPost(formatComment, post._id));

    // Immediate update so user sees it immediately
    setComments(newComments);
    // Clear the text field
    setComment('');
    // Scroll smoothly to the latest comment
    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  console.log(comments);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <div className={classes.container}>
        {user?.result?.username && (
          <div className={classes.commentsBox}>
            <Typography variant="h6" marginBottom={'10px'}>
              Leave a comment
            </Typography>
            <TextField
              rows={4}
              multiline
              variant="outlined"
              name="comment"
              label="Comment"
              value={comment}
              onKeyPress={handleKeyPress}
              onChange={(e) => setComment(e.target.value)}
              color="secondary"
              fullWidth
            />
            <Button
              style={{ marginTop: '10px' }}
              disabled={!comment}
              variant="contained"
              onClick={handleClick}
              className={classes.btn}
            >
              Comment
            </Button>
          </div>
        )}
        <div className={classes.showBox}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          <div className={classes.commentsShow}>
            {comments?.map((comment, index) => (
             
              <Typography key={index} variant="subtitle1">
                <div className={classes.singleComment}>
                  <div className={classes.CommentUser}>
                    <strong>{comment.split(':')[0]}</strong>
                    <div className={classes.CommentTime}>
                      Created at:{new Date().toLocaleString() + ""}
                    </div>
                  </div>

                  <div className={classes.CommentContent}>
                  {comment.split(':')[1]}
                  </div>
                </div>
              </Typography>
            
            ))}
            <div ref={commentsRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
