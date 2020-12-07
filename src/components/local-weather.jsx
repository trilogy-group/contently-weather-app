import React from "react";
import { fetchWeather } from "../utils";
import Search from "./search";
import Today from "./today-weather";
import FiveDay from "./five-day-weather";
import { CopyToClipboard } from "react-copy-to-clipboard";

class LocalWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCity: props.city, weather: {}, showError: false, units: "imperial", copied: false };
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.fetchWeatherData(this.props.city.split(", ").join(","), "imperial");
  }

  componentDidUpdate() {
    if (this.props.city !== this.state.currentCity) {
      this.fetchWeatherData(this.props.city, this.state.units);
    }
  }

  fetchWeatherData(city, unit) {
    console.warn(city, unit);
    fetchWeather(city, unit).then(data => {
      this.setState({ weather: data, currentCity: this.props.city, copied: false });
    }).catch(err => {
      this.setState({showError: true});
    });
  }

  handleClick() {
    const newUnits = this.state.units === "imperial" ? "metric" : "imperial";
    this.setState({ units: newUnits });
    this.fetchWeatherData(this.props.city.split(", ").join(","), newUnits);
  }

  handleCopy() {
    this.setState({ copied: true });
  }

  render () {
    return (
      <div>
        {
          this.state.showError
            ? <h3>Oops! Something went wrong.</h3>
            : this.state.weather.current

              ?  (
                <div className="local-weather">
                  <h3 className="local-weather-title">Weather for {this.props.city.split(",")[0]}</h3>
                  <Today weather={this.state.weather.current} units={this.state.units} />
                  <FiveDay weather={this.state.weather} units={this.state.units} />
                  <button className="unit-btn" onClick={this.handleClick}>{this.state.units === "imperial" ? "Celsius" : "Fahrenheit"}</button>
                  <CopyToClipboard text={window.location.href}>
                    <button className="unit-btn" onClick={this.handleCopy}>{this.state.copied ? 'Copied!' : 'Copy to this url to share with your local weather with friends!'}</button>
                  </CopyToClipboard>
                </div>
                )
                  
                : null
        }
        <Search />
      </div>
    );
  }
}

export default LocalWeather;
