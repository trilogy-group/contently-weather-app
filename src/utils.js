import API_KEY from './config/secrets';
import { gotWeather, gotError } from './store/actions';
import axios from 'axios';

//importing API_KEY from a secrets file that will not be uploaded.  In production keys should be kept in process.env variables.

export const fetchWeather = location => {
  //const API_KEY = "<INSERT_API_KEY>";
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api
  const { cityName, geo } = location;
  const url = `https://api.openweathermap.org/data/2.5/`;
  let query;

  //checking for city name or lat and lon
  if (cityName) {
    //splitting out space with + to support city's with multi word names
    query = `?q=${cityName.split(' ').join('+')}`;
  }

  if (geo) {
    query = geo;
  }

  //using a thunk in redux for handling side effects
  //note - this file could be moved to the store folder for consistancy with other redux files
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

//this function gets the current location from the browser and fetches the weather based on lat and long
export const getGeoLocation = async () => {
  let query;
  await new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(() => {
        alert('Browser Location not Supported');
      });
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position);
        query = `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      },
      () => {
        alert('Please allow permission to access your location');
      }
    );
  });
  return query;
};
