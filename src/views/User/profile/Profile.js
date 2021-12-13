import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Input,
  Button,
} from '@mui/material';
//import PhotoCamera from '@mui/icons-material';

const Profile = () => {
  //username state
  const [username, setUsername] = useState('');

  //type of user state
  const [value, setValue] = useState();

  //handle type of user
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //handle username mount
  useEffect(() => {
    document.title = { username };
  });

  //handle username event target
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1> Profile </h1>
      <Container>
        <FormControl>
          {/* usernmae */}
          <TextField
            id="outlined-basic"
            label="Add your name"
            variant="outlined"
            value={username}
            onChange={updateUsername}
          />
        </FormControl>
        <FormControl>
          {/* type of user */}
          <Select value={value} id="demo-simple-select" onChange={handleChange}>
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
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </FormControl>
      </Container>
    </>
  );
};

export default Profile;
