import axios from 'axios';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getWeather = async (cityName, unit) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`)
  return response.data
};

const getForecast = async (cityName, unit) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`)
  return response.data.list
};

export {
  getWeather,
  getForecast
}