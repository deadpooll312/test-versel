import React from 'react';

const ErrorItem = ({ field, error }) => {
  if (field === 'nonFieldErrors' || field === 'detail') {
    return <small className="form-text text-danger">{error}</small>;
  }

  return (
    <div>
      <strong>{field}: </strong>
      <small className="form-text text-danger">{error[0]}</small>
    </div>
  );
}

export default ErrorItem;
