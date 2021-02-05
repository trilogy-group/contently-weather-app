import React from "react";
import { CurrentWeather } from "./current-weather/current-weather";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";

function App() {
  return (
    <div>
  <h1>Weather</h1>
  <div className="flex-grid">
  <div className="col"><CurrentWeather></CurrentWeather></div>
  <div className="col"></div>
  <div className="col"></div>
</div>
</div>
  );
}

export default App;
