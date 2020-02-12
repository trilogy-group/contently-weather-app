import React from "react";
import DailyWeather from './DailyWeather';

const WeatherDisplay = (props) => {
  const {
    weatherData,
    degreeMetric,
  } = props;

  return (
    <div id="weather-display">
      {weatherData.map(data => data.temps && (
        <DailyWeather
          key={JSON.stringify(data)}
          degreeMetric={degreeMetric}
          {...data}
        /> ))}
    </div>
  )
}

export default WeatherDisplay;
