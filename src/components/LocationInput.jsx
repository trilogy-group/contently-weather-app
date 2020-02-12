import React from "react";

const LocationInput = (props) => {
  const {
    setCity,
    setTimeframe,
    setMetric,
  } = props;  

  return (
    <div id="location-input">
      <label>City Name: </label>
      <input
        name="city"
        type="text"
        required
        onChange={setCity}
      />

      <label for="timeframe">How many days of weather? (1-16)</label>
      <input
        name="timeframe"
        type="text"
        onChange={setTimeframe}
      />

      <label for="degree-metric">Display degrees in:</label>
      <div>
        {['Celsius', 'Farenheit'].map((str) => (
          <div className="radio" key={str}>
            <label>{str}</label>
            <input
              name="degree-metric"
              type="radio"
              value={str.slice(0,1)}
              onChange={setMetric}
            />
        </div>
        ))}
      </div>

    </div>
  )

};

export default LocationInput;
