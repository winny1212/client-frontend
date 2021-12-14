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
//import { styled } from '@mui/material/styles';

// const Input = styled('input')({
//   display: 'none',
// });

const Profile = () => {
  //user name state
  const [name, setName] = useState('');

  //error user name
  const [nameError, setNameError] = useState(false);

  //set radio button to the state
  const [category, setCategory] = useState('');

  //upload file to the state
  const [file, setFile] = useState();
  const [fileSelected, setFileSelected] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);

    console.log(file.name);
    if (name === '') {
      setNameError(true);
    }

    if (name && fileSelected) {
      console.log(name, category, fileSelected);
    }
    // //handle upload data
    // const formData = new FormData();

    // formData.append('File', file);

    // console.log(file.name);
    // fetch({
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log('Success:', result);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  // upload functionality
  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setFileSelected(true);
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
            <p>Please, add your photo!</p>
            <label htmlFor="contained-button-file">
              <Input
                style={{ display: 'none' }}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={changeHandler}
              />
              <Button variant="contained" component="span">
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

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default Profile;
