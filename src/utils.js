import openweather from "./api/openweather";

const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e";

export const fetchWeather = cityName => {
  return openweather.get(
    `/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
  );
};

export const fetchForecast = cityName => {
  return openweather.get(
    `/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`
  );
};
