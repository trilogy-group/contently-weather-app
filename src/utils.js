const fetchWeather = async cityName => {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  try {
    // Query API for current day forecast and 5 day/3 hour forecast.
    // After, we will remove what we don't need.

    let [currentRes, fiveDayRes] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
      )
    ]);

    // var scoped to function body so we can access these variables outside
    // of the try/catch.
    // Return currentWeather forecast intact so it includes city and other important data.
    var currentWeather = await currentRes.json();

    // Cut five day forecast to just what we need, which is
    // daily weather at 3:00 pm.

    // Get list object in five day forecast response
    // and starting from first 3:00 pm forecast, return every 8th forecast (3:00 pm).
    var { list } = await fiveDayRes.json();

    var fiveDayForecast =
      list && list.slice(4, list.length).filter((val, i) => i % 8 === 0);
  } catch (err) {
    console.error('err', err);
    throw err;
  }
  // Return weather data in one array.
  return [currentWeather, fiveDayForecast];
};

export default fetchWeather;
