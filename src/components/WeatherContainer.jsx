import { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Forecast from './Forecast';
import DailyTemp from './DailyTemp';
import { fetchWeather, fetchForecast } from '../helpers/utils';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';

const WeatherContainer = (props) => {
  const history = useHistory();
  const [city, setCity] = useState('');
  const [isMetric, setIsMetric] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  let todaysDate = new Date();
  let forecastDate = todaysDate.getFullYear() + "-" + (todaysDate.getMonth() + 1) + "-" + todaysDate.getDate(); //Wanted to avoid using a 3rd party lib for something this small

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

  const toggleUnitType = () => {
    let url;
    if (props.match.params.unit === 'imperial') {
      url = `/${city}/metric`
    }
    if (props.match.params.unit === 'metric') {
      url = `/${city}/imperial`
    }
    history.push(url)
    window.location.reload(false);
  }

  useLayoutEffect(() => {
    setCity(props.match.params.city);

    if (props.match.params.unit === 'metric') {
      setIsMetric(true)
    } else {
      setIsMetric(false)
    }

    fetchWeather(props.match.params.city, props.match.params.unit)
    .then(results => 
      setWeatherData({temp: results.main.temp.toFixed(), description: results.weather[0].description, image: setWeatherDataImage(results.weather[0].main)}),
      )

    setForecastData([])
    fetchForecast(props.match.params.city, props.match.params.unit)
    .then(results => 
      results.list.forEach((i) => {
        if (forecastDate !== i.dt_txt.split(" ")[0]) { //omit today, and since api returns every 3 hours for each day, take the first entry and skip the rest for that day
          forecastDate = i.dt_txt.split(" ")[0]
          setForecastData(oldArray => [...oldArray, {temp: i.main.temp.toFixed(), description: i.weather[0].description, image: setWeatherDataImage(i.weather[0].main), date: forecastDate}]);
        }
      })
      )
  }, [props.match.params.city])


  return (
    <div>
      <DailyTemp
        city={city} 
        weatherData={weatherData}
        toggleUnitType={toggleUnitType}
        isMetric={isMetric}
      />
      <div className="mt-10 mb-10">
        <Forecast 
          forecastData={forecastData}
          isMetric={isMetric}
        />
      </div>
    </div>
  );
}

export default WeatherContainer;
