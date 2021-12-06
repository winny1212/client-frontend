import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Login, { validateInput } from './Login';

describe('login', () => {
  test('validate function should pass on correct input', () => {
    const text = 'test@test.com';
    expect(validateInput(text)).toBe(true);
  });

  test('validate function should pass on correct input', () => {
    const text = 'test';
    expect(validateInput(text)).not.toBe(true);
  });

  test('login form should be in the document', () => {
    const component = render(<App />);
    const labelNode = component.getByText('Email:');
    expect(labelNode).toBeInTheDocument();
  });
});
