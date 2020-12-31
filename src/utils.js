import axios from "axios";

export const fetchWeather =([lat, long], units) => {
  const API_KEY = "5450ba50c661a6a67a2fcf6879829874";
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${units}`);
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
