import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../../components/navigation/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

//cleanup the data after each test
afterEach(() => {
  cleanup();
});

describe('Navbar', () => {
  // render Navbar
  it('should render Navbar', () => {
    const nav = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(nav.getByText('About')).toBeInTheDocument();
    expect(nav.getByText('Home')).toBeInTheDocument();
    expect(nav.getByText('Register')).toBeInTheDocument();
    expect(nav.getByText('Login')).toBeInTheDocument();
  });
});
