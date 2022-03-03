import React, { Fragment } from 'react';

import ErrorItem from './ErrorItem';

const ServerError = ({ error }) => {
  if (!error || !error.data) return <Fragment />;

  return (
    <div>
      {typeof error.data === 'string' ? (
        <ErrorItem field="detail" error="Неизвестная ошибка" />
      ) : Object.keys(error.data).map(key => (
        <ErrorItem key={key} field={key} error={error.data[key]} />
      ))}
    </div>
  );
};

export default ServerError;
