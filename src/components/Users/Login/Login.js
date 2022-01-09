import React, { useState } from 'react';
import Header from '../../../components/layout/Header';

// State
import { useDispatch } from 'react-redux';

// Actions
import { signIn } from '../../../actions/auth';

import {
  Container,
  Paper,
  FormControl,
  TextField,
  Button,
} from '@mui/material';

const initialState = {
  email: '',
  password: '',
};

export const validateInput = (str = '') => str.includes('@');

export default function Login() {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data we got was:', data);

    console.log('Signing in...');

    // We need a modal to say wrong password....
    // Dispatch MESSAGE?
    dispatch(signIn(data));
  };

  return (
    <>
      <Header title="Please enter you details for login" />
      <Container component="main" style={{ marginTop: 30, marginBottom: 30 }}>
        <Paper
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          elevation={3}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              {/* Email */}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
                name="email"
                value={data.email}
                type="text"
              />
              <br />
              {/* Password */}
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
                name="password"
                value={data.password}
                type="password"
              />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </>
  );
}
