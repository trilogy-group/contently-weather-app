import React from 'react';

// Render Image icon from weather API.
const Image = ({ icon }) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={'Weather Icon'}
    />
  );
};

export default Image;
