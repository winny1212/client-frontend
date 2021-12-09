import React from 'react';
import { getYear } from '../../utils/general';

const Footer = () => {
  return (
    <footer>
      <p>DIY GROOMING &copy; {getYear()}</p>
    </footer>
  );
};

export default Footer;
