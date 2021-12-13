import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Input,
  Button,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Profile = () => {
  //username state
  const [name, setName] = useState('');

  //type of user state
  const [value, setValue] = useState('');

  //upload photo state
  const [photo, setPhoto] = useState('');

  //handle type of user
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //handle username mount
  useEffect(() => {
    document.title = { name };
  });

  //handle username event target
  const updateUserName = (event) => {
    setName(event.target.value);
  };

  //handle upload photo
  const uploadPhotoHandler = (event) => {
    setPhoto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1> Profile </h1>
      <Container>
        <form onSubmit={handleSubmit}>
          {/* user name */}
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Add your name"
              variant="outlined"
              value={name}
              onChange={updateUserName}
            />
          </FormControl>

          {/* type of user */}
          <FormControl>
            <Select
              value={value}
              id="demo-simple-select"
              onChange={handleChange}
            >
              <MenuItem value={'Professional Groomer'}>
                Professional Groomer
              </MenuItem>

              <MenuItem value={'Non Professional Groomer'}>
                Non Professional Groomer
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            {/* upload button */}
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                // multiple
                type="file"
                value={photo}
              />
              <Button
                variant="contained"
                component="span"
                onChange={uploadPhotoHandler}
              >
                Upload Photo
              </Button>
            </label>
          </FormControl>
          <div>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Submit
              </Button>
            </Stack>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Profile;
