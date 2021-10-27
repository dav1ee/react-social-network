import { Field } from 'redux-form';

export const createField = (
  component,
  validate,
  name,
  type,
  placeholder,
  className,
  fieldclass = '',
  text = '',
  props = {},
) => (
  <>
    <Field
      component={component}
      validate={validate}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      fieldclass={fieldclass}
      {...props}
    />
    {text}
  </>
);
