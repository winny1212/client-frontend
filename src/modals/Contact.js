import React, { useState } from 'react';
// import API from material-ui
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Contact = ({ username, author }) => {
  //initial contact form state when click the button
  const [open, setOpen] = useState(false);

  //function of toggle
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // logic for sending the email

    // close dialog/modal
    setOpen(false);
  };

  return (
    <div>
      {/* contact form */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Contact {author?.username}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact {author?.username}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form to contact {author?.username} directly
            through email
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Name"
              type="text"
              fullWidth
              variant="standard"
              name="name"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your email address"
              type="email"
              fullWidth
              variant="standard"
              name="email-address"
            />
            <TextField
              id="message"
              label="Message"
              multiline
              variant="standard"
              minRows={3}
              placeholder="Leave Your Message..."
              name="text"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          {/* button for canceling the form or submitting the form */}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
