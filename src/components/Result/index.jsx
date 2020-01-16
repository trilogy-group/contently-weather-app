import React, { useContext } from 'react';
import { Context } from '../../Context';
import Weather from './Weather.jsx';
import FiveDay from './FiveDay.jsx';

// Container component that passes data from API to children components.
// Only render if API call has been made.

const Result = () => {
  const { loading, weatherData } = useContext(Context);

  return (
    <div>
      {loading ? <p>Loading ...</p> : null}
      {weatherData.length > 0 && (
        <>
          <Weather currentDay={weatherData[0]} />
          <FiveDay fiveDayForecast={weatherData[1]} />
        </>
      )}
    </div>
  );
};

export default Result;
