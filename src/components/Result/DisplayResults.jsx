import React from 'react';
import Image from './Image.jsx';
import convertFromKelvin from '../../convertFromKelvin';

// This reusable component renders data from the API.

const DisplayResults = ({ data }) => {
  if (data) {
    const { weather, main, dt_txt } = data;

    return (
      <div>
        <ul>
          <p> {dt_txt && <li>{dt_txt.substring(5, 10)}</li>}</p>
          <li>
            <Image icon={weather[0].icon} />
          </li>
          <li>
            <p>{weather[0].description}</p>
          </li>
          <li>
            <p> Temperature: {convertFromKelvin(main.temp)}</p>
          </li>
          <li>
            <p> Feels like: {convertFromKelvin(main.feels_like)}</p>
          </li>
        </ul>
      </div>
    );
  }
};

export default DisplayResults;
