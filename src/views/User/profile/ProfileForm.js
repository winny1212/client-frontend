import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Checkbox,
  TextField,
  FormControl,
  Button,
  FormControlLabel,
  Input,
} from '@mui/material';
import Header from '../../../components/layout/Header';

const initialState = {
  username: '',
  email: '',
  proGroomer: false,
  location: '',
  socMedia: '',
  website: '',
  bio: '',
};

const ProfileForm = () => {
  // Form Data State
  const [formData, setFormData] = useState(initialState);
  //upload file to the state
  const [file, setFile] = useState();
  const [fileSelected, setFileSelected] = useState(false);

  // Will update our formData with its respective field.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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

  // upload functionality
  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setFileSelected(true);
  };

  return (
    <>
      <Header title="Edit Profile" />
      <Container
        component="main"
        maxWidth="md"
        sx={{ marginTop: 4, marginBottom: 4 }}
      >
        <Paper
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          elevation={3}
        >
          <br />
          <form onSubmit={handleSubmit}>
            <FormControl>
              {/* username */}
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
                type="text"
              />
              <br />
              <Typography variant="h5" sx={{ marginRight: 8, fontSize: 22 }}>
                Are you a professional dog groomer?
              </Typography>
              <FormControlLabel
                color="secondary"
                control={<Checkbox />}
                label="Yes"
              />
              <FormControlLabel
                color="secondary"
                control={<Checkbox />}
                label="No"
              />
              <br />
              {/* email */}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
              <br />
              {/* location */}
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
              <br />
              {/* website */}
              <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <br />
              {/* Social Media */}
              <TextField
                id="outlined-basic"
                label="Social Media"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
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

                <Button variant="contained" component="span" fullWidth>
                  Upload Photo
                </Button>
                <br />
                {/* bio */}

                <TextField
                  id="outlined-multiline-static"
                  label="Bio"
                  multiline
                  rows={4}
                  fullWidth
                />
                <br />
                {/* submit */}
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </label>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default ProfileForm;
