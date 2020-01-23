import React from 'react';
import '../stylesheets/results.css';

const Results = props => {
  const { forecast } = props;

  return (
    <div className="forecast">
      <h3>Forecast:</h3>
      {forecast.map(forecast => {
        return (
          <div key={forecast.date}>
            <h5>{forecast.date}</h5>
            <p>
              Min: {forecast.min}
              <span>&#176;</span>
            </p>
            <p>
              Max: {forecast.max}
              <span>&#176;</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
