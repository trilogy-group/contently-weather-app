import React from 'react';

export default function Header(props) {
  const {
    view,
    handleUnit,
    handleChange,
    handleClick,
    handleView
  } = props

  return (
    <header>
      <h1><Logo />Weather</h1>
      <input type="text" name="cityName" onChange={handleChange} placeholder="Enter City... " />
      <button onClick={handleClick}>Get Weather</button><br />
      <div id="view-options" className={`${view}-link`} >
        <a href="#" id="current-button" onClick={handleView}>Current</a>
        <a href="#" id="forecast-button" onClick={handleView}>Forecast</a>
      </div>
      <button id="F" onClick={handleUnit}>&deg;F</button>
      <button id="C" onClick={handleUnit}>&deg;C</button>
    </header>
  )
}