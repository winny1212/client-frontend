import React from 'react';
import Link from 'react-router-dom';
import Header from '../../components/shared/Header';
import { StyledBtnOutlined } from '../../components/shared/StyledButtons';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function ErrorPage() {
  return (
    <>
      <Header title="Oops... Missing Page" />
      <Container maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignContent="center"
          spacing={3}
          sx={{ mt: '5rem' }}
        >
          <Typography
            component="h2"
            variant="bodyIntro"
            sx={{ mb: '2rem', textAlign: 'center' }}
          >
            The page you're looking for is not found
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <StyledBtnOutlined href="/">Back to Home</StyledBtnOutlined>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default ErrorPage;
