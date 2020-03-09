import React from "react";
import { fetchWeather, fetchForecast } from "../utils";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";
import "./WeatherContainer.css";
import FormatSelector from "./FormatSelector";

class WeatherContainer extends React.Component {
  state = { currentWeather: {}, currentForecastDays: [], selectedFormat: "F" };

  async componentDidMount() {
    this.onCitySubmit("New York");
  }

  setCurrentWeather = async cityName => {
    let response = await fetchWeather(cityName);
    this.setState({ currentWeather: response.data });
  };

  setCurrentForecast = async cityName => {
    let response = await fetchForecast(cityName);
    let forecastDays = response.data.list.filter(day => {
      return day.dt_txt.includes("18:00:00");
    });

    this.setState({ currentForecastDays: forecastDays });
  };

  onCitySubmit = cityName => {
    this.setCurrentWeather(cityName);
    this.setCurrentForecast(cityName);
  };

  onSelectFormat = (event, { value }) => {
    this.setState({ selectedFormat: value });
  };

  convertToCelsius = temperature => {
    return Math.round(((temperature - 32) * 5) / 9);
  };

  render() {
    return (
      <div className="ui container weather-container">
        <h1>Weather</h1>

        <div className="ui centered grid">
          <SearchBar onCitySubmit={this.onCitySubmit} />
          <FormatSelector
            onSelectFormat={this.onSelectFormat}
            selectedFormat={this.state.selectedFormat}
          />
          <WeatherDisplay
            currentWeather={this.state.currentWeather}
            selectedFormat={this.state.selectedFormat}
            convertToCelsius={this.convertToCelsius}
          />
          <ForecastDisplay
            currentForecastDays={this.state.currentForecastDays}
            selectedFormat={this.state.selectedFormat}
            convertToCelsius={this.convertToCelsius}
          />
        </div>
      </div>
    );
  }
}

export default WeatherContainer;
