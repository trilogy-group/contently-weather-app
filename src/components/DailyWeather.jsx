import React from "react";

const DailyWeather = (props) => {
  const {
    temps,
    degreeMetric,
  } = props;
  const displayTemps = temps[degreeMetric];
  const {
    temp,
    feels_like,
    temp_max,
    temp_min,
  } = displayTemps;

  return (
    <div className="daily-weather">
      <p>Temperature: {temp}</p>
      <p>Feels Like: {feels_like}</p>
      <p>Max: {temp_max}</p>
      <p>Min: {temp_min}</p>
    </div>
  )
};

export default DailyWeather;
