import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  Button,
  FormControlLabel,
  Input,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import Header from '../../../components/shared/Header';
// import ImgUpload from '../../../components/shared/ImgUpload';
import { updateUser } from '../../../actions/auth';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));
  const initialState = user.result;
  // Form Data State
  const [formData, setFormData] = useState(initialState);
  const stateRef = useRef();

  //upload file to the state
  const [file, setFile] = useState();
  const [fileSelected, setFileSelected] = useState(false);

  useEffect(() => {
    // If we have the post we are looking for, populate all fields with the data,
    // This is possible because teh fields are closed forms.
    if (formData) {
      setFormData(formData);
    }
  }, [formData]);

  // Will update our formData with its respective field.
  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.dir(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateUser(formData._id, formData));
  };

  // upload functionality
  const imageUpload = (file) => {
    setFile(file);
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
          <form>
            <FormControl>
              {/* username */}
              <TextField
                defaultValue={initialState.username}
                id="outlined-basic"
                label="Username"
                name="username"
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
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  defaultValue={initialState.proGroomer}
                  row
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <br />
              {/* email */}
              <TextField
                defaultValue={initialState.email}
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
                defaultValue={initialState.location}
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
                defaultValue={initialState.socMedia}
                id="outlined-basic"
                label="Social Media"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <br />
              {/* upload button */}
              <p>Please, add your photo!</p>
              <ImgUpload handleImageDetailsChange={imageUpload} />

              {/* <label htmlFor="contained-button-file">
                <Input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={changeHandler}
                /> */}

              {/* <Button
                sx={{ marginTop: '12px' }}
                variant="contained"
                component="span"
                fullWidth
              >
                Upload Photo
              </Button> */}
              <br />
              {/* bio */}

              <TextField
                defaultValue={initialState.bio}
                sx={{ marginTop: '12px' }}
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows={4}
                fullWidth
              />
              <br />
              {/* submit */}
              <Button
                onClick={handleSubmit}
                sx={{ marginTop: '12px' }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default ProfileForm;
