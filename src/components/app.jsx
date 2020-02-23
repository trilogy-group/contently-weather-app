import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';
import sunny from '../images/sunny.png';
import "../App.css";
import { fetchWeather } from '../utils.js';

class App extends React.Component {
  state = {
    cityName: "",
    currentWeather: {
      main: "",
      description: "",
      temp: "",
      windSpeed: "",
      iconLink: ""
    }
  }

  async componentDidMount() {
    if (document.location.pathname !== "/") {
      const cityName = document.location.pathname.slice(1).replace(/%20/g, " ")
      this.setState({
        cityName
      })
      this.handleWeatherState(cityName)
    }
  }

  handleWeatherState = async (cityName) => {
    const response = await fetchWeather(cityName)

    const { main, description, icon } = response.weather[0]
    console.log(response)
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
  }

  render() {
    const {
      cityName,
      currentWeather
    } = this.state

    return (
      <div>
        <h1><Logo />Weather</h1>
        <input type="text" name="cityName" onChange={this.handleChange} placeholder="Enter City... " />
        <button onClick={this.handleClick}>Get Weather</button>
        {
          currentWeather.main &&
          <div>
            <h3>{cityName} Weather:</h3>
            <img src={currentWeather.iconLink} />
            <p>{currentWeather.description}</p>
            <p>temp: {currentWeather.temp}&deg;F</p>
            <p>wind: {currentWeather.windSpeed}mph</p>
          </div>
        }
      </div>
    )
  }
}

export default App;
