import React, { useState, useEffect } from 'react';
import { Context } from '../Context';
import { ReactComponent as Logo } from '../images/sun.svg';
import Form from './Form/index.jsx';
import Result from './Result/index.jsx';
import '../App.scss';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ setWeatherData, weatherData, setLoading, loading }}
    >
      <Form />
      <Result />
    </Context.Provider>
  );
}

export default App;
