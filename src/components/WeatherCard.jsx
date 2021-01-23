import React, { Fragment } from "react";

const WeatherCard = ({
  currentTemp,
  weatherIconUrl,
  weatherDescription,
  weatherDate,
  dailyHigh,
  dailyLow,
  unit,
}) => {
  const renderUnit = () => {
    if (unit === "imperial") {
      return "°F";
    } else {
      return "°C";
    }
  };

  const renderTemp = () => {
    if (dailyHigh != null && dailyLow != null) {
      return (
        <Fragment>
          <div className="header">{`High: ${dailyHigh} ${renderUnit()}`}</div>
          <div className="header">{`Low: ${dailyLow} ${renderUnit()}`}</div>
        </Fragment>
      );
    } else {
      return <div className="header">{`${currentTemp} ${renderUnit()}`}</div>;
    }
  };

  return (
    <div className="ui card centered">
      <div className="image" id="weather-image">
        <img src={weatherIconUrl} />
      </div>
      <div className="content">
        {renderTemp()}
        <div className="meta">
          <span className="date">{weatherDate}</span>
        </div>
        <div className="description">{weatherDescription}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
