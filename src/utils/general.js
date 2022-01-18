export const generateID = () => {
  return new Date().getTime().toString();
};

export const getYear = () => {
  return new Date().getFullYear();
};

// Calculate Pixel to Rem for font sizing
const basePx = 16;
export const pxToRem = (value) => {
  return `${value / basePx}rem`;
};

// Alternative to date-fns, obtain date from MongoDB
export const getDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-us', options);
};

export const getShortDate = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-us', options);
};
