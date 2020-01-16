import React from 'react';

const Error = ({ error }) => {
  return error ? (
    <div>
      <p className="has-text-danger">Oops, an error occurred!</p>
    </div>
  ) : null;
};

export default Error;
