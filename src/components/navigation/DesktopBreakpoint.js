// on this file is implemented responsive breakpoint //
import React from 'react';
import DynamicButtons from './DynamicButtons';

//material ui
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

//import { StyledBtn } from '../shared/StyledButtons';

const DesktopBreakpoint = () => {
  //render Desktop breakpoint

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Button variant="container" href="/">
          Home
        </Button>
        <Button data-testid="about-button" href="/about" variant="container">
          About
        </Button>
        <DynamicButtons />
      </Container>
    </>
  );
};

export default DesktopBreakpoint;
