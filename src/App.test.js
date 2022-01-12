import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Auth, { validateInput } from './views/auth/Auth.js';

//cleanup the data after each test
afterEach(() => {
  cleanup();
});

describe('login', () => {
  test('email input to be email address', () => {
    const text = 'test@test.com';
    expect(validateInput(text)).toBe(true);
  });
});
