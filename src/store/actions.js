import { LOCATION, GOT_WEATHER, GOT_ERROR } from './types';

//getting city from form and adding it to redux state via reducer
export const setLocation = location => {
  return {
    type: LOCATION,
    location
  };
};

//adding weather from thunk and sending to reducer
export const gotWeather = weather => {
  return {
    type: GOT_WEATHER,
    weather
  };
};

//adding any error messages to state via reducer
export const gotError = error => {
  return {
    type: GOT_ERROR,
    error
  };
};
