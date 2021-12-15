import React from 'react';
import Header from '../../../components/layout/Header';

export const validateInput = (str = '') => str.includes('@');

export default function Login() {
  return (
    <>
      <Header />
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />

        <button type="submit">submit</button>
      </form>
    </>
  );
}
