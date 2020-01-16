import React from 'react';
import Image from './Image';
import convert from '../../convert';

// This reusable component renders data from the API.

const DisplayResults = ({ data }) => {
  if (data) {
    const { weather, main, dt_txt } = data;

    return (
      <>
        {/* Render date if fiveDay is true. */}
        <ul>
          {dt_txt && <li>{dt_txt.substring(5, 10)}</li>}
          <li>
            <Image icon={weather[0].icon} />
          </li>
          <li>{weather[0].description}</li>
          <li>Temperature: {convert(main.temp)}</li>
          <li>Feels like: {convert(main.feels_like)}</li>
        </ul>
      </>
    );
  }
};

export default DisplayResults;
