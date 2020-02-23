import axios from 'axios';

const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e"

const getWeather = async cityName => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`)
  return response.data
};

const getForecast = async cityName => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`)
  return response.data
};

export {
  getWeather,
  getForecast
}