import React from 'react';
import cn from 'classnames';
import { ErrorMessage, Field } from 'formik';

export default function Input({
  name,
  className,
  type,
  left,
  right,
  size,
  label,
  help,
  component = 'input',
  ...attributes
}) {
  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className={cn('input-group', size)}>
        {left ? (
          <div className="input-group-prepend">
            {left}
          </div>
        ) : null}

        <Field
          className={cn('form-control', component, className)}
          type={type || 'text'}
          name={name}
          id={name}
          component={component}
          {...attributes}
        />

        {right ? (
          <div className="input-group-append">
            {right}
          </div>
        ) : null}
      </div>

      {help ? <small className="form-text text-muted">{help}</small> : null}

      <ErrorMessage name={name}>
        {errorMsg => <small className="form-text text-danger">{errorMsg}</small>}
      </ErrorMessage>
    </div>
  );
}
