export const fetchWeather = (cityName) => {
  const API_KEY = "740fee2f337ae281a8894434d230cfd0";
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`,
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      console.log(error)
    })
};