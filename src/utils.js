import axios from 'axios';

const fetchWeather = async cityName => {
  const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e"
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`)
  return response.data
};

const fetchForecast = async cityName => {
  const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e"

};

export {
  fetchWeather
}