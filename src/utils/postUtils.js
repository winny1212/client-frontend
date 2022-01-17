export const splitWords = (words) => {
  words.split(',').map((word) => word.trim());
};

export const capitalise = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

export const checkDuration = (duration) => {
  if (duration > 3) {
    return `More than ${duration} hours`;
  } else if (duration <= 1) {
    return `Up to ${duration} hour`;
  } else {
    return `Up to ${duration} hours`;
  }
};
