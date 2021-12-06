import React from 'react';

export const validateInput = (str = '') => str.includes('@');

export default function Login() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />

      <button role="button">submit</button>
    </form>
  );
}
