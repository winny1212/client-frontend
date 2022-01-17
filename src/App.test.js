import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Auth, { validateInput } from './views/auth/Auth.js';

import { createMemoryHistory } from 'history';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import DesktopBreakpoint from './components/navigation/DesktopBreakpoint';
import NavBarLinks from './components/navigation/NavBarLinks.js';
import About from './views/about/About.js';

//cleanup the data after each test

afterEach(() => {
  cleanup();
});

//test the Auth.js file
describe('user auth/login/register', () => {
  //the email should include "@"
  test('email input to be email address', () => {
    const text = 'test@test.com';
    expect(validateInput(text)).toBe(true);
  });

  test('validate function should pass on correct input', () => {
    const text = 'test';
    expect(validateInput(text)).not.toBe(true);
  });
});

//test the route to about page
