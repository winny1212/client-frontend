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
//import { styled } from '@mui/material/styles';

// const Input = styled('input')({
//   display: 'none',
// });

const ProfileForm = () => {
  //username state
  const [name, setName] = useState('');

  // email state
  const [email, setEmail] = useState('');

  // location state
  const [location, setLocation] = useState('');

  // website state
  const [website, setWebsite] = useState('');

  //name validation
  const [nameError, setNameError] = useState(false);

  //location validation
  const [locationError, setLocationError] = useState(false);

  //email validation
  const [emailError, setEmailError] = useState(false);

  //set radio button to the state
  const [category, setCategory] = useState('');

  //upload file to the state
  const [file, setFile] = useState();
  const [fileSelected, setFileSelected] = useState(false);

  //text field state
  const [bio, setBio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setLocationError(false);
    setEmailError(false);

    console.log(file.name);
    if (name === '') {
      setNameError(true);
    }
    if (location === '') {
      setLocationError(true);
    }
    if (email === '') {
      setEmailError(true);
    }

    if (name) {
      console.log(name, category, fileSelected, bio, location, email, website);
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
          {/* username */}
          <TextField
            id="outlined-basic"
            label="Add your name"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <br />
          {/* location */}
          <TextField
            id="outlined-basic"
            label="Add your Location"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setLocation(e.target.value)}
            error={locationError}
          />
          <br />
          {/* email */}
          <TextField
            id="outlined-basic"
            label="Add your Email"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <br />
          {/* website */}
          <TextField
            id="outlined-basic"
            label="Add your website"
            variant="outlined"
            fullWidth
            onChange={(e) => setWebsite(e.target.value)}
          />
          <br />
          {/* type of user radio button */}
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
          <br />
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
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Add you Bio"
            multiline
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
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

export default ProfileForm;
