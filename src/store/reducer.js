import { LOCATION, GOT_WEATHER, GOT_ERROR } from './types';

const initialState = {
  location: '',
  weather: {},
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION:
      return { ...state, location: action.location };
    case GOT_WEATHER:
      const weather = action.weather;
      //hash table to record min and max
      const newForecast = {};
      // array for mapping out forecast elements
      const forecastArray = [];

      //because the forecast is in 3 hour increments and min and max is realative to this time period, we must loop through each time period and set the min and max for each day
      action.weather.forecast.list.forEach(forecast => {
        const date = forecast.dt_txt.split(' ')[0];
        const min = forecast.main.temp_min;
        const max = forecast.main.temp_max;
        //adding new date to table with min and max
        if (!(date in newForecast)) {
          newForecast[date] = {
            min,
            max
          };
        } else {
          //checking other forcasts of same day and updated min and max
          if (newForecast[date].min > min) {
            newForecast[date].min = min;
          }
          if (newForecast[date].max < max) {
            newForecast[date].max = max;
          }
        }
      });
      //adding forcasts to an array to be sent to state for mapping front end elements
      for (let date in newForecast) {
        forecastArray.push({
          date: date,
          min: newForecast[date].min,
          max: newForecast[date].max
        });
      }
      weather.forecast = forecastArray;
      return { ...state, weather };
    default:
      return state;
  }
};

export default reducer;
