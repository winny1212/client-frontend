import React, { useState, useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

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
import ImgUpload from '../../../components/shared/ImgUpload';
import { updateUser } from '../../../actions/auth';

const ProfileForm = () => {
  const navigate = useNavigate();
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
  };
  // upload functionality
  const imageUpload = (name, file) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: file,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateUser(formData._id, formData));
    navigate('/profile');
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
                  name="proGroomer"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              {/* email */}
              <TextField
                defaultValue={initialState.email}
                id="outlined-basic"
                name="email"
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
                name="location"
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
                defaultValue={initialState.website}
                name="website"
                label="Website"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <br />
              {/* Social Media */}
              <TextField
                defaultValue={initialState.socMedia}
                name="socMedia"
                id="outlined-basic"
                label="Social Media"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <br />
              {/* upload button */}
              <p>Please, add your photo!</p>
              <ImgUpload name="avatar" handleImageDetailsChange={imageUpload} />

              <br />
              {/* bio */}

              <TextField
                defaultValue={initialState.bio}
                name="bio"
                sx={{ marginTop: '12px' }}
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows={4}
                fullWidth
                onChange={handleChange}
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
