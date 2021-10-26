import React from 'react';

export const withFormControls =
  (Element) =>
  ({ input, meta, className, fieldClass, ...props }) => {
    const isError = meta.touched && meta.error;

    return (
      <div className={className}>
        <Element {...input} {...props} className={fieldClass} />
        {isError && <small>{meta.error}</small>}
      </div>
    );
  };
