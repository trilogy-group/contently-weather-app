import { LOCATION } from './types';

export const setLocation = location => {
  return {
    type: LOCATION,
    location
  };
};
