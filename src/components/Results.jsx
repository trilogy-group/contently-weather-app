import React from 'react';
import { connect } from 'react-redux';

const Results = props => {
  const { current, forecast } = props.weather;

  return (
    <div className="results-page">
      {current ? (
        <div className="results">
          <div className="current">
            <h3>Current Weather in {current.name}:</h3>
            <img
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt={`${current.weather[0].icon}.png`}
            ></img>
            <p>{current.weather[0].description.toUpperCase()}</p>
            <p>
              Temperature: {current.main.temp}
              <span>&#176;</span>
            </p>
            <p>Wind Speed: {current.wind.speed} mph</p>
            <p>
              Wind Chill: {current.main.feels_like} <span>&#176;</span>
            </p>
          </div>
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
        </div>
      ) : (
        <div>
          {props.error ? (
            <div>
              <h3>Input Error!</h3>
              <p>
                valid input is city name with optional 2 digit country code
                precided by a comma
              </p>
              <p>example: New York, US</p>
            </div>
          ) : (
            <h3>Search for results</h3>
          )}
        </div>
      )}
    </div>
  );
};

//mapping redux state to props
const mapStateToProps = state => {
  return {
    weather: state.weather,
    error: state.error
  };
};

export default connect(mapStateToProps)(Results);
