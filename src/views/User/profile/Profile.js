import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Button,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Profile = () => {
  //user name state
  const [name, setName] = useState('');

  //error user name
  const [nameError, setNameError] = useState(false);

  //set radio button to the state
  const [category, setCategory] = useState('');

  //upload photo to the state
  const [photo, setPhoto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);

    if (name === '') {
      setNameError(true);
    }

    if (name) {
      console.log(name, category);
    }
  };

  return (
    <>
      <h1> Profile </h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          {/* user name */}
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Add your name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
          </FormControl>
          <br />

          {/* type of user radio button */}
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Are you professional groomer?
            </FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="type of user"
              defaultValue="no"
              name="radio-buttons-group"
            >
              <FormControlLabel value="no" control={<Radio />} label="no" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
            </RadioGroup>
          </FormControl>

          <br />
          <FormControl>
            {/* upload button */}
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                value={photo}
                variant="contained"
                component="span"
                onChange={(e) => setPhoto(e.target.value)}
              >
                Upload Photo
              </Button>
            </label>
          </FormControl>
          <br />
          <TextareaAutosize
            maxRows={5}
            aria-label="maximum height"
            placeholder="You can add your bio here!!!"
          />
          <br />

          <Button primary={true} type="submit" variant="contained">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default Profile;
