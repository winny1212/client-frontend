import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Profile = () => {
  //user profile to state
  const [username, setUsername] = useState('');

  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    document.title = { username };
  });

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
      </Container>
    </>
  );
};

export default Profile;
