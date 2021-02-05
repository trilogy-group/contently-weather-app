const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = cityName => fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`).then(response => response.json());

export const fetchFiveDayForecast = cityName => fetch(`//api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`).then(response => response.json());