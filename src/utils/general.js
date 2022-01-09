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
