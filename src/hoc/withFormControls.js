import React from 'react';

export const withFormControls =
  (Element) =>
  ({ input, meta, className, fieldclass, ...props }) => {
    const isError = meta.touched && meta.error;

    return (
      <div className={className}>
        <Element {...input} {...props} className={fieldclass} />
        {isError && <small>{meta.error}</small>}
      </div>
    );
  };
