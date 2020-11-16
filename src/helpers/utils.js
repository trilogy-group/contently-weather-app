const API_KEY = "740fee2f337ae281a8894434d230cfd0";

export const fetchWeather = (cityName, units) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`,
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      console.log(error)
    })
};

export const fetchForecast = (cityName, units) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${API_KEY}`,
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      console.log(error)
    })
};