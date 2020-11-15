import { useEffect, useState } from 'react';

import { fetchWeather } from '../helpers/utils';

const WeatherContainer = (props) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setCity(props.match.params.city);

    fetchWeather(props.match.params.city)
    .then(results => 
      setWeatherData({temp: results.main.temp.toFixed(), description: results.weather[0].description}),
      )
  }, [props.match.params.city])


  return (
    <div>
      <h1>Dumb component for weather results here</h1>
    </div>
  );
}

export default WeatherContainer;
