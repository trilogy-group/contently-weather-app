const fetchWeather = async (cityName) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=imperial`
  let dataObj = {}
  await fetch(URL)
  .then(res =>  res.json())
  .then(data => {
    const {cod} = data
    if (cod==="404"){
    dataObj['error']= 'Invalid city input'
    } else {
      dataObj = data 
    }
  })
  .catch(error => {
      dataObj['error']= 'Invalid city input'
    })
  return dataObj
};

export default fetchWeather;