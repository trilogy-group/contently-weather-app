import { LOCATION } from './types';

const initialState = {
  location: '',
  weather: {},
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION:
      return { ...state, location: action.location };
    default:
      return state;
  }
};

export default reducer;
