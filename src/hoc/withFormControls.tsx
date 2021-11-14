import React from 'react';

type FormParamsType = {
  input: string | React.Component;
  meta: {
    touched: boolean;
    error: string;
  };
  className: string;
  fieldclass: string;
};

export const withFormControls =
  (Element: React.ElementType) =>
  ({ input, meta, className, fieldclass, ...props }: FormParamsType) => {
    const isError = meta.touched && meta.error;

    return (
      <div className={className}>
        <Element {...input} {...props} className={fieldclass} />
        {isError && <small>{meta.error}</small>}
      </div>
    );
  };
