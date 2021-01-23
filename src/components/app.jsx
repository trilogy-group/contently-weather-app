import React, { useState } from "react";
import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDayForecast";
import Nav from "./Nav";
import UnitCheckbox from "./UnitCheckbox";
import Search from "./Search";

function App() {
  const [currentView, setCurrentView] = useState("currentWeather");
  const [unit, setUnit] = useState("imperial");
  const [location, setLocation] = useState("Miami");

  const OPEN_WEATHER_APP_ID = "62536724de969bf01c1e02a249c958f9";

  const searchButtonOnClick = (searchTerm) => {
    setLocation(searchTerm);
  };

  const renderContent = () => {
    if (currentView === "currentWeather") {
      return (
        <CurrentWeather
          location={location}
          apiKey={OPEN_WEATHER_APP_ID}
          unit={unit}
        />
      );
    } else {
      return (
        <FiveDayForecast
          location={location}
          apiKey={OPEN_WEATHER_APP_ID}
          unit={unit}
        />
      );
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <Search searchButtonOnClick={searchButtonOnClick} />
      <Nav onViewChange={setCurrentView} currentView={currentView} />
      <UnitCheckbox onChange={setUnit} unit={unit} />
      {renderContent()}
    </div>
  );
}

export default App;
