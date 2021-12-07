import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Login, { validateInput } from './components/Users/Login/Login';

//cleanup the data after each test
afterEach(() => {
  cleanup();
});

describe('login', () => {
  test('email input to be email address', () => {
    const text = 'test@test.com';
    expect(validateInput(text)).toBe(true);
  });

  test('validate function should pass on correct input', () => {
    const text = 'test';
    expect(validateInput(text)).not.toBe(true);
  });

  test('login form should be in the document', () => {
    const component = render(<Login />);
    const labelNode = component.getByText('Email:');
    expect(labelNode).toBeInTheDocument();
  });

  test('email field should have label', () => {
    const component = render(<Login />);
    const emailInputNode = component.getByLabelText('Email:');
    expect(emailInputNode.getAttribute('name')).toBe('email');
  });

  test('email input should accept text', () => {
    const { getByLabelText } = render(<Login />);
    const emailInputNode = getByLabelText('Email:');
    expect(emailInputNode.value).toMatch('');
    fireEvent.change(emailInputNode, { target: { value: 'testing' } });
    expect(emailInputNode.value).toMatch('testing');
  });

  test('should be able to submit form', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<Login handleSumbit={mockFn} />);
    const buttonNode = getByRole('button');
    fireEvent.submit(buttonNode);
  });
});
