import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Contact = () => {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Contact me
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={sendEmail}>
        <DialogTitle>Contact me</DialogTitle>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
