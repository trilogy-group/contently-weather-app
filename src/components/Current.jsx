import React from 'react';
import '../stylesheets/results.css';

const Current = props => {
  const { current } = props;

  return (
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
  );
};

export default Current;
