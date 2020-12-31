import axios from "axios";

const fetchWeather = cityName => {
  const API_KEY = "<INSERT_API_KEY>";
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api
};

export const fetchCities = cityName => {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {namePrefix: cityName},
    headers: {
      'x-rapidapi-key': '78f3e07c2emsh2c03a262acdff0fp187678jsn543ce263d270',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  return axios.request(options)
}
