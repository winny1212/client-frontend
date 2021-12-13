import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Input,
  Button,
  InputLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Profile = () => {
  //user name state
  const [name, setName] = useState('');

  //type of user state
  const [type, setType] = useState('');

  //error user name
  const [nameError, setNameError] = useState(false);

  //error type of user
  const [typeError, setTypeError] = useState(false);

  //set radio button to the state
  const [category, setCategory] = useState('');

  //upload photo state
  //const [photo, setPhoto] = useState([]);

  //handle upload photo
  // const uploadPhotoHandler = (event) => {
  //   setPhoto([...event.target.value]);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setTypeError(false);

    if (name === '') {
      setNameError(true);
    }

    if (type === '') {
      setTypeError(true);
    }

    if (name && type) {
      console.log(name, type);
    }
  };

  return (
    <>
      <h1> Profile </h1>
      <form
      //style={{ marginTop: '20px', marginBottom: '20px', display: 'block' }}
      >
        <FormControl onSubmit={handleSubmit}>
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

          {/* Testing radio button */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Type of user</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="type of user "
              defaultValue="non professional groomer"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="non professional groomer"
                control={<Radio />}
                label="non professional groomer"
              />
              <FormControlLabel
                value="Professional Groomer"
                control={<Radio />}
                label="Professional Groomer"
              />
            </RadioGroup>
          </FormControl>

          <br />
          {/* type of user */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type of user</InputLabel>
            <Select
              id="demo-simple-select"
              label="Add your type of user"
              required
              error={typeError}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={'Professional Groomer'}>
                Professional Groomer
              </MenuItem>

              <MenuItem value={'Non Professional Groomer'}>
                Non Professional Groomer
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            {/* upload button */}
            {/* <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                variant="contained"
                component="span"
                onChange={uploadPhotoHandler}
              >
                Upload Photo
              </Button>
            </label> */}
          </FormControl>
          <br />
          <TextareaAutosize
            maxRows={5}
            aria-label="maximum height"
            placeholder="You can add your bio here!!!"
          />
          <br />
          {/* <Stack direction="row" spacing={2}> */}
          <Button
            // onClick={() => console.log('you clicked me')}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
          {/* </Stack> */}
        </FormControl>
      </form>
    </>
  );
};

export default Profile;
