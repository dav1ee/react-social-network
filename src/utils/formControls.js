import { Field } from 'redux-form';

export const createField = (
  component,
  validate,
  name,
  type,
  placeholder,
  className,
  fieldClass,
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
      fieldClass={fieldClass}
      {...props}
    />
    {text}
  </>
);
