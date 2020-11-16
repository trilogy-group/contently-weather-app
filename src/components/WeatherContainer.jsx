import React, { useEffect, useState } from 'react';

import { fetchWeather, fetchForecast } from '../helpers/utils';
import DailyTemp from './DailyTemp';
import Forecast from './Forecast';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';

const WeatherContainer = (props) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  let todaysDate = new Date();
  let forecastDate = todaysDate.getFullYear() + "-" + (todaysDate.getMonth() + 1) + "-" + todaysDate.getDate();

  const setWeatherDataImage = (data) => {
    if (data === 'Clouds') {
      return cloudy
    }
    if (data === 'Clear') {
      return sunny
    }
    if (data === 'Rain') {
      return rainy
    }
  }

  useEffect(() => {
    setCity(props.match.params.city);

    fetchWeather(props.match.params.city)
    .then(results => 
      setWeatherData({temp: results.main.temp.toFixed(), description: results.weather[0].description, image: setWeatherDataImage(results.weather[0].main)}),
      )

      setForecastData([])
      fetchForecast(props.match.params.city)
      .then(results => 
        results.list.forEach((i) => {
          if (forecastDate !== i.dt_txt.split(" ")[0]) { //omit today, and since api returns every 3 hours for each day, take the first entry and skip the rest for that day
            forecastDate = i.dt_txt.split(" ")[0]
            setForecastData(oldArray => [...oldArray, {temp: i.main.temp.toFixed(), description: i.weather[0].description, image: setWeatherDataImage(i.weather[0].main), date: forecastDate}]);
          }
        }))
  }, [props.match.params.city])


  return (
    <div>
      <DailyTemp 
        city={city} 
        weatherData={weatherData}
      />
      <div className="mt-10 mb-10">
        <Forecast 
          forecastData={forecastData}
        />
      </div>
    </div>
  );
}

export default WeatherContainer;
