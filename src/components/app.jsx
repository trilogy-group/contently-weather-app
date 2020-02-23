import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";
import { getWeather, getForecast } from '../utils.js';

class App extends React.Component {
  state = {
    cityName: "",
    currentWeather: {
      main: "",
      description: "",
      temp: "",
      windSpeed: "",
      iconLink: ""
    },
    forecast: [],
    view: "current",
    unit: "metric"
  }

  async componentDidMount() {
    if (document.location.pathname !== "/") {
      const cityName = document.location.pathname.slice(1).replace(/%20/g, " ")
      const { unit } = this.state
      this.setState({
        cityName
      })
      this.handleWeatherState(cityName, unit)
      this.handleForecastState(cityName, unit)
    }
  }

  handleWeatherState = async (cityName, unit) => {
    const response = await getWeather(cityName, unit)
    console.log(response)
    const { main, description, icon } = response.weather[0]
    const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`
    const temp = Math.round(response.main.temp)
    const windSpeed = Math.round(response.wind.speed)
    this.setState({
      currentWeather: {
        main,
        description,
        temp,
        windSpeed,
        iconLink
      }
    })
  }

  handleForecastState = async (cityName, unit) => {
    const forecastData = await getForecast(cityName, unit)
    const options = { weekday: 'long', hour: 'numeric' }
    const forecast = forecastData.map(forecast => {
      let dateTime = new Date(forecast.dt * 1000).toLocaleDateString('en-US', options)
      return {
        dateTime: dateTime,
        temp: Math.round(forecast.main.temp),
        main: forecast.weather[0].main,
        description: forecast.weather[0].description,
        windSpeed: Math.round(forecast.wind.speed),
        iconLink: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
      }
    })
    this.setState({
      forecast
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    const { cityName, unit } = this.state
    document.location.pathname = cityName
    this.handleWeatherState(cityName, unit)
    this.handleForecastState(cityName, unit)
  }

  handleView = (e) => {
    e.preventDefault()
    const view = e.target.id === "current-button" ? "current" : "forecast";
    this.setState({
      view
    })
  }

  handleUnit = (e) => {
    const { cityName } = this.state
    const unitId = e.target.id
    const unit = unitId === "F" ? "imperial" : "metric";
    this.setState({
      unit
    })
    this.handleWeatherState(cityName, unit)
    this.handleForecastState(cityName, unit)
  }

  render() {
    const {
      cityName,
      currentWeather,
      forecast,
      view,
      unit
    } = this.state

    return (
      <div>
        <header>
          <h1><Logo />Weather</h1>
          <input type="text" name="cityName" onChange={this.handleChange} placeholder="Enter City... " />
          <button onClick={this.handleClick}>Get Weather</button><br />
          <div id="view-options" className={`${view}-link`} >
            <a href="#" id="current-button" onClick={this.handleView}>Current</a>
            <a href="#" id="forecast-button" onClick={this.handleView}>Forecast</a>
          </div>
          <button id="F" onClick={this.handleUnit}>&deg;F</button>
          <button id="C" onClick={this.handleUnit}>&deg;C</button>
        </header>
        <main>
          {
            currentWeather.main && view === "current" &&
            <div id="current">
              <h3>{cityName} Weather:</h3>
              <img src={currentWeather.iconLink} />
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

          {
            view === "forecast" && cityName &&
            <div id="forecast">
              <h3>{cityName} Forecast:</h3>
              {
                forecast.map((forecast, index) => (
                  <div key={index} className="forecast-segment">
                    <p>{forecast.dateTime}</p>
                    <img src={forecast.iconLink} />
                    <p>{forecast.description}</p>
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
                ))}
            </div>
          }
        </main>
      </div >
    )
  }
}

export default App;


