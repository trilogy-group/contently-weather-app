import React from 'react';

const Loading = ({ loading }) => {
  return loading ? (
    <div>
      <p>Loading ...</p>
    </div>
  ) : null;
};

export default Loading;
