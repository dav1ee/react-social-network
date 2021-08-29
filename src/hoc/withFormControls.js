import React from 'react';

export const withFormControls =
  (Element) =>
  ({ input, meta, className, ...props }) => {
    const isError = meta.touched && meta.error;

    return (
      <div className={className}>
        <Element {...input} {...props} />
        {isError && <small>{meta.error}</small>}
      </div>
    );
  };
