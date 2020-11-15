import { useEffect, useState } from 'react';

import { fetchWeather } from '../helpers/utils';
import DailyTemp from './DailyTemp';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';

const WeatherContainer = (props) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});

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
  }, [props.match.params.city])


  return (
    <div>
      <DailyTemp 
        city={city} 
        weatherData={weatherData}
      />
    </div>
  );
}

export default WeatherContainer;
