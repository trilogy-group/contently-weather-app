import React, { useState, useContext } from 'react';
import { Context } from '../../Context';
import Input from '../presentational/Input.jsx';
import fetchWeather from '../../utils';

const Form = () => {
  // Get setState funcs from Context.
  const { setLoading, setWeatherData } = useContext(Context);

  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setInput(e.target.value);
  };

  // Call API when user submits query.
  const handleSearch = async () => {
    setError(false);
    setLoading(true);

    const res = await fetchWeather(input);

    // If API call is successful, store weather data in state.
    // If it is not successful, throw error.
    if (res && res[0].cod !== 200) {
      setError(true);
    } else {
      setWeatherData(res);
    }

    setLoading(false);
  };

  return (
    <div className="section">
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
      {error && <p className="has-text-danger">Oops, an error occurred!</p>}
    </div>
  );
};

export default Form;
