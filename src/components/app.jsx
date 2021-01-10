import React, { useState, useEffect } from "react";
import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDayForecast";
import Nav from "./Nav";
import UnitCheckbox from "./UnitCheckbox";

function App() {
  const [currentView, setCurrentView] = useState("currentWeather");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [err, setErr] = useState(null);
  const [unit, setUnit] = useState("imperial");

  const OPEN_WEATHER_APP_ID = "62536724de969bf01c1e02a249c958f9";

  useEffect(() => {
    // Make a one time call to our browser to get current position
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => {
        setErr(err);
      }
    );
  }, []);

  const renderContent = () => {
    if (err) {
      return "Whoops, an error occurred. Have you allowed your browser to access your location?";
    }

    if (!lon || !lat) {
      return (
        <div class="ui active dimmer">
          <div class="ui text loader">Please wait...</div>
        </div>
      );
    }

    if (currentView === "currentWeather") {
      return (
        <CurrentWeather
          lat={lat}
          lon={lon}
          apiKey={OPEN_WEATHER_APP_ID}
          unit={unit}
        />
      );
    } else {
      return (
        <FiveDayForecast
          lat={lat}
          lon={lon}
          apiKey={OPEN_WEATHER_APP_ID}
          unit={unit}
        />
      );
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <Nav onViewChange={setCurrentView} currentView={currentView} />
      <UnitCheckbox onChange={setUnit} unit={unit} />
      {renderContent()}
    </div>
  );
}

export default App;
