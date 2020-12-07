import { getWeatherPic } from "../images/index";
import React from "react";

class FiveDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { daily: props.weather.daily.slice(1, 6) };
  }

  componentDidUpdate() {
    if (this.props.weather.daily[1].temp.day !== this.state.daily[0].temp.day) {
      this.setState({ daily: this.props.weather.daily.slice(1, 6) });
    }
  }

  render () {
    return (
      <div className="weekly-forecast">
        {
          this.state.daily.map((forecast, i) => {
            const date = new Date(forecast.dt * 1000);
            const yearString = date.getFullYear().toString();
            return (
              <div className="day-forecast" key={i}>
                <p className="title">{date.toString().slice(0, date.toString().indexOf(yearString))}</p>
                <hr />
                <p className="forecase-item">{forecast.weather[0].main}</p>
                <img src={getWeatherPic(forecast.weather[0].main)} alt="weather" />
                <p className="forecase-item">Min: {forecast.temp.min}{'\u00b0'}{this.props.units === "imperial" ? 'F' : 'C'}</p>
                <p className="forecase-item">Max: {forecast.temp.max}{'\u00b0'}{this.props.units === "imperial" ? 'F' : 'C'}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default FiveDay;
