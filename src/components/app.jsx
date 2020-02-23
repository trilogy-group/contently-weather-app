import React from "react";
import "../App.css";
import { getWeather, getForecast } from '../utils.js';
import Header from './Header';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

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
    unit: "imperial"
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
        <Header
          view={view}
          unit={unit}
          handleUnit={this.handleUnit}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleView={this.handleView}
        />
        <main>
          <WeatherCurrent
            cityName={cityName}
            currentWeather={currentWeather}
            unit={unit}
            view={view}
          />
          <WeatherForecast
            cityName={cityName}
            forecast={forecast}
            unit={unit}
            view={view}
          />
        </main>
      </div >
    )
  }
}

export default App;


