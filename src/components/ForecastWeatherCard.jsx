import React from "react";

const ForecastWeatherCard = ({
  currentTemp,
  weatherIconUrl,
  weatherDescription,
  weatherDate,
}) => {
  return (
    <div className="ui card centered">
      <div className="image">
        <img src={weatherIconUrl} />
      </div>
      <div className="content">
        <div className="header">{`${currentTemp} °F`}</div>
        <div className="meta">
          <span className="date">{weatherDate}</span>
        </div>
        <div className="description">{weatherDescription}</div>
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
