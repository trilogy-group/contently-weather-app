import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';
import sunny from '../images/sunny.png';
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
    view: "forecast"
  }

  async componentDidMount() {
    if (document.location.pathname !== "/") {
      const cityName = document.location.pathname.slice(1).replace(/%20/g, " ")
      this.setState({
        cityName
      })
      this.handleWeatherState(cityName)
      this.handleForecastState(cityName)
    }
  }

  handleWeatherState = async (cityName) => {
    const response = await getWeather(cityName)
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

  handleForecastState = async (cityName) => {
    const response = await getForecast(cityName)

    const forecastData = response.list
    // const dt = response.list[3].dt
    // var date = new Date(dt * 1000);
    let options = {
      weekday: 'long',
      hour: 'numeric'
    }
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
    console.log(forecast)
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
    const { cityName } = this.state
    document.location.pathname = cityName
    this.handleWeatherState(cityName)
    this.handleForecastState(cityName)
  }

  render() {
    const {
      cityName,
      currentWeather,
      forecast,
      view
    } = this.state

    return (
      <div>
        <h1><Logo />Weather</h1>
        <input type="text" name="cityName" onChange={this.handleChange} placeholder="Enter City... " />
        <button onClick={this.handleClick}>Get Weather</button><br />
        <a href="#" onClick={this.handleCurrentWeather}>Current Weather</a>
        <a href="#" onClick={this.handleForecast}>Forecast</a>
        {
          currentWeather.main && view === "current" &&
          <div>
            <h3>{cityName} Weather:</h3>
            <img src={currentWeather.iconLink} />
            <p>{currentWeather.description}</p>
            <p>temp: {currentWeather.temp}&deg;F</p>
            <p>wind: {currentWeather.windSpeed}mph</p>
          </div>
        }
        {
          view === "forecast" && forecast.map((forecast, index) => (
            <div key={index}>
              <p>{forecast.dateTime}</p>
              <img src={forecast.iconLink} />
              <p>{forecast.description}</p>
              <p>temp: {forecast.temp}&deg;F</p>
              <p>wind: {forecast.windSpeed}mph</p>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}

export default App;


