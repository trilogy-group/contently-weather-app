import React from 'react';

export default function WeatherCurrent(props) {
  const {
    cityName,
    currentWeather,
    unit,
    view
  } = props

  return (
    <>
      {
        cityName && currentWeather.main && view === "current" &&
        <div id="current">
          <h3>{cityName} Weather:</h3>
          <img src={currentWeather.iconLink} alt={currentWeather.main} />
          <p>{currentWeather.description}</p>
          {
            unit === "imperial" ?
              <>
                <p>temp: {currentWeather.temp}&deg;F</p>
                <p>wind: {currentWeather.windSpeed}mph</p>
              </> :
              <>
                <p>temp: {currentWeather.temp}&deg;C</p>
                <p>wind: {currentWeather.windSpeed}kph</p>
              </>
          }
        </div>
      }
    </>
  )
}