export type FieldValidatorType = (value: string) => string | undefined;

export const required: FieldValidatorType = (value) => {
  if (value) return undefined;
  return 'This field is required';
};

export const maxLength =
  (num: number): FieldValidatorType =>
  (value) => {
    if (value.length > num) return `Max length is ${num} symbols`;
    return undefined;
  };
