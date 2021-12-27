export const splitWords = (words) => {
  words.split(',').map((word) => word.trim());
};

export const capitalise = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};
