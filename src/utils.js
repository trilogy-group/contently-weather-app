import API_KEY from './config/secrets';
import { gotWeather, gotError } from './store/actions';
import axios from 'axios';

//importing API_KEY from a secrets file that will not be uploaded.  In production keys should be kept in process.env variables.

export const fetchWeather = cityName => {
  //const API_KEY = "<INSERT_API_KEY>";
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api
  const url = `https://api.openweathermap.org/data/2.5/`;
  let query = `?q=${cityName.split(' ').join('+')}`;

  //using a thunk in redux for handling side effects
  return async dispatch => {
    try {
      const currentWeather = await axios.get(
        url + 'weather' + query + `&units=imperial&APPID=${API_KEY}`
      );
      const forecast = await axios.get(
        url + 'forecast' + query + `&units=imperial&APPID=${API_KEY}`
      );
      dispatch(
        gotWeather({
          current: currentWeather.data,
          forecast: forecast.data
        })
      );
    } catch (error) {
      dispatch(gotError(error.response.data));
      throw error;
    }
  };
};
