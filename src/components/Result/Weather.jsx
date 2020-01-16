import React from 'react';
import DisplayResults from './DisplayResults';

// This functional component renders the current weather.
// I've created this instead of rendering the results in Index
// for scalability purposes. It may be useful to have this component
// ready when the app gets larger

const Weather = ({ currentDay }) => {
  return currentDay ? (
    <div className="section">
      <h3 className="is-size-3">Here's the weather in {currentDay.name}</h3>
      <br />
      <h3 className="is-size-3">Today:</h3>
      <DisplayResults data={currentDay} />
    </div>
  ) : null;
};

export default Weather;
