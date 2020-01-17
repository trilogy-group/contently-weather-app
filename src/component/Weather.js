import React from "react";

const Weather = props => (
  <div className="weather-value">
    {props.temperature && <p>temperature {props.temperature}</p>}
    {props.description && <p>description {props.description}</p>}
    <img src={`https://openweathermap.org/img/w/${props.icon}.png`} />
    <p> {props.error}</p>
  </div>
);

export default Weather;
