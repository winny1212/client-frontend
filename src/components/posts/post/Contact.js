import React from 'react';
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

const Contact = ({ username }) => {
  //initial contact form state when click the button
  const [open, setOpen] = React.useState(false);

  //function of toggle
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* contact form */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Contact me
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact {username}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have any question,please feel free to contact me.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="Name"
            fullWidth
            variant="standard"
            name="name"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="user_email"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Leave Your Message..."
            style={{ width: '100%' }}
            name="message"
          />
        </DialogContent>
        <DialogActions>
          {/* button for canceling the form or submitting the form */}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
