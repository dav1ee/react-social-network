export const required = (value) => {
  if (value) return undefined;
  return 'This field is required';
};

export const maxLength = (num) => (value) => {
  if (value.length > num) return `Max length is ${num} symbols`;
  return undefined;
};
