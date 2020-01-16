import React from 'react';
import DisplayResults from './DisplayResults';

// This functional component maps through the five day forecast
// and renders the data through its child component.

const FiveDay = ({ fiveDayForecast }) => {
  // Implement defensive coding with conditional rendering.
  if (fiveDayForecast) {
    // Create empty elements array.
    const elements = [];

    // Loop over each of the five day forecasts and push into elements array.
    // The array of DisplayResults components will be rendered below.
    fiveDayForecast.map((fiveDayData, i) => {
      return elements.push(
        <div className="column" key={i}>
          <DisplayResults data={fiveDayData} key={i} />
        </div>
      );
    });

    return (
      <div className="section">
        <div>
          <h3 className="is-size-3">The next 5 days:</h3>
          <br />
        </div>
        <div className="columns">{elements}</div>
      </div>
    );
  } else return null;
};

export default FiveDay;
