import axios from 'axios';

const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e"

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