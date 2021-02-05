import React, { Fragment } from "react";
import { CurrentWeather } from "./current-weather/current-weather";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";

function App() {
  return (
  <Fragment>
    <h1>Weather</h1>
    <h2>Enter a city:</h2>
    <CurrentWeather></CurrentWeather>
  </Fragment>
  );
}

export default App;
