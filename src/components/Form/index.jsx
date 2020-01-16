import React, { useState, useContext } from 'react';
import Input from '../presentational/Input.jsx';
import Error from '../presentational/Error.jsx';
import { Context } from '../../Context';
import fetchWeather from '../../utils';

const Form = () => {
  // Get setState funcs from Context.
  const { setLoading, setWeatherData } = useContext(Context);

  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setInput(e.target.value);
  };

  // Simulate a slower API call for better UX.
  const slowDown = cb => {
    setTimeout(() => {
      cb();
      return setLoading(false);
    }, 500);
  };

  // Call API when user submits query.
  const handleSearch = async () => {
    setLoading(true);

    const res = await fetchWeather(input);

    // If API call is successful, store weather data in state.
    // If it is not successful, throw error.
    if (res && res[0].cod !== 200) {
      slowDown(() => setError(true));
    } else {
      // Set Weather data with callback function. Also set error to false
      // in case user threw an error on a previous search.
      slowDown(() => {
        setWeatherData(res);
        setError(false);
      });
    }

    // Slow down the loading component for better UX.
  };

  return (
    <div className="section">
      <div>
        <h2 className="is-size-2">Weather</h2>
        <Input
          handleChange={handleChange}
          onSubmit={handleSearch}
          label={'Search your city:'}
          placeholder={'New York City'}
        />
        <br />
        <button className="button" onClick={handleSearch}>
          Go!
        </button>
      </div>
      <Error error={error} />
    </div>
  );
};

export default Form;
