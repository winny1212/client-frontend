import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Login, { validateInput } from './Login';

describe('login', () => {
  test('validate function should pass on correct input', () => {
    const text = 'test@test.com';
    expect(validateInput(text)).toBe(true);
  });
});
