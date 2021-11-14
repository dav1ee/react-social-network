import { Field } from 'redux-form';

import { FieldValidatorType } from '../utils/formValidators';

export function createField<FormKeysType extends string>(
  component: any,
  validate: Array<FieldValidatorType>,
  name: FormKeysType,
  type: string,
  placeholder: string | null,
  className: string | null,
  fieldclass = '',
  text = '',
  props = {},
) {
  return (
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
}
