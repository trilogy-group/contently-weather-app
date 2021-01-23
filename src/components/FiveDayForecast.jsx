import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const FiveDayForecast = ({ location, apiKey, unit }) => {
  const [forecastData, setForecastData] = useState([]);
  const NUMBER_OF_MILLISECONDS_IN_ONE_SECOND = 1000;

  useEffect(() => {
    const fetchForecast = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast/daily",
        {
          params: {
            q: location,
            appid: apiKey,
            units: unit,
            cnt: 6,
          },
        }
      );

      setForecastData(data.list);
    };
    if (location) {
      fetchForecast();
    }
  }, [location, apiKey, unit]);

  const renderCards = () => {
    return forecastData.map((data) => {
      const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      const weatherDescription = data.weather[0].main;
      const weatherDate = new Date(
        data.dt * NUMBER_OF_MILLISECONDS_IN_ONE_SECOND
      ).toDateString();
      return (
        <WeatherCard
          dailyHigh={Math.floor(data.temp.max)}
          dailyLow={Math.floor(data.temp.min)}
          weatherIconUrl={weatherIconUrl}
          weatherDescription={weatherDescription}
          weatherDate={weatherDate}
          key={data.dt}
          unit={unit}
        />
      );
    });
  };

  return <div className="ui cards">{renderCards()}</div>;
};

export default FiveDayForecast;
