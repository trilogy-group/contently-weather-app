import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

function App() {
  return (
    <div>
      <WeatherDetails />
    </div>
  );
}

export default App;
