import React from 'react';

export default function WeatherForecast(props) {
  const {
    cityName,
    forecast,
    unit,
    view
  } = props

  return (
    <>
      {
        view === "forecast" && cityName &&
        <div id="forecast">
          <h3>{cityName} Forecast:</h3>
          {
            forecast.map((forecast, index) => (
              <div key={index} className="forecast-segment">
                <p>{forecast.dateTime}</p>
                <img src={forecast.iconLink} alt={forecast.main} />
                <p>{forecast.description}</p>
                {
                  unit === "imperial" ?
                    <>
                      <p>temp: {forecast.temp}&deg;F</p>
                      <p>wind: {forecast.windSpeed}mph</p>
                    </> :
                    <>
                      <p>temp: {forecast.temp}&deg;C</p>
                      <p>wind: {forecast.windSpeed}kph</p>
                    </>
                }
              </div>
            ))}
        </div>
      }
    </>
  )
}