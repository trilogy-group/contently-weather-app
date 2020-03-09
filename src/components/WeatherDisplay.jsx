import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({
  currentWeather,
  selectedFormat,
  convertToCelsius
}) => {
  if (!(currentWeather && currentWeather.main && currentWeather.weather)) {
    return <div>Loading...</div>;
  }

  const icon = `owf owf-${currentWeather.weather[0].id} owf-5x`;

  return (
    <div className="ui row">
      <div className="left floated left aligned six wide column">
        <h1>
          Current Temp:{" "}
          {selectedFormat === "F"
            ? Math.round(currentWeather.main.temp)
            : convertToCelsius(Math.round(currentWeather.main.temp))}{" "}
          °
        </h1>
        <i className={icon}></i>
        <p>{currentWeather.weather[0].main}</p>
        <p>
          Feels Like:{" "}
          {selectedFormat === "F"
            ? Math.round(currentWeather.main.feels_like)
            : convertToCelsius(Math.round(currentWeather.main.feels_like))}
          °
        </p>
        <p>
          High/Low:{" "}
          {selectedFormat === "F"
            ? Math.round(currentWeather.main.temp_max)
            : convertToCelsius(Math.round(currentWeather.main.temp_max))}
          °/
          {selectedFormat === "F"
            ? Math.round(currentWeather.main.temp_min)
            : convertToCelsius(Math.round(currentWeather.main.temp_min))}
          °
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
