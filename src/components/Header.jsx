import React from 'react';
import { ReactComponent as Logo } from "../images/sun.svg";

export default function Header(props) {
  const {
    view,
    unit,
    currentWeather,
    handleUnit,
    handleChange,
    handleClick,
    handleView,
    handleClear
  } = props

  return (
    <header>
      <h1><Logo />Weather</h1>
      <div>
        <input autoFocus required type="text" name="cityName" onChange={handleChange} onClick={handleClear} placeholder="Enter City... " />
        <button onClick={handleClick}>Get Weather</button>
      </div>
      {currentWeather.main &&
        <>
          <div id="unit-options" className={`${unit}-buttons`}>
            <span id="F" onClick={handleUnit}>&deg;F</span> |
          <span id="C" onClick={handleUnit}>&deg;C</span>
          </div>
          <div id="view-options" className={`${view}-links`} >
            <a href="#" id="current-button" onClick={handleView}>Current</a>
            <a href="#" id="forecast-button" onClick={handleView}>Forecast</a>
          </div>
        </>
      }

    </header>
  )
}