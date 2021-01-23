import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const CurrentWeather = ({ location, apiKey, unit }) => {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherDate, setWeatherDate] = useState("");

  useEffect(() => {
    // use lat and long that were just updated to do api call to get
    // weather data
    const fetchWeather = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: location,
            appid: apiKey,
            units: unit,
          },
        }
      );
      setCurrentTemp(Math.floor(data.main.temp));
      setWeatherIconUrl(
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      );
      setWeatherDescription(data.weather[0].main);
      setWeatherDate(new Date().toDateString());
    };
    if (location) {
      fetchWeather();
    }
  }, [location, apiKey, unit]);

  if (!currentTemp) {
    return null;
  }

  return (
    <div>
      <WeatherCard
        currentTemp={currentTemp}
        weatherIconUrl={weatherIconUrl}
        weatherDescription={weatherDescription}
        weatherDate={weatherDate}
        unit={unit}
      />
    </div>
  );
};

export default CurrentWeather;
