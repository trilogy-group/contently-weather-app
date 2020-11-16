import React from "react";
import { strftime, firstToUpperCase, kelvinToFahrenheit, kelvinToCelsius } from "../../utils.js";

class Day extends React.Component {

  formattedDay = () => {
    const dateText = this.props.dayReport.dt_txt;
    let parsedDate = new Date(Date.parse(dateText))
    let formattedDate = strftime("%a", parsedDate);
    return formattedDate
  }

  weatherDescription = () => {
    const description = this.props.dayReport.weather[0].description;
    return firstToUpperCase(description);
  }

  currentTemperature = () => {
    // Given more time I would match the report with closest time
    // for each of the returned weather reports
    const currentTemperature = this.props.dayReport.main.temp;
    return this.convertTemp(currentTemperature);
  }

  hiTemp = () => {
    // Given more time I would aggregate the all high temperatures
    // for each of the returned weather reports and select the highest temperature
    const currentTemperature = this.props.dayReport.main.temp;
    return this.convertTemp(currentTemperature);
  }

  lowTemp = () => {
    // Given more time I would aggregate the all high temperatures
    // for each of the returned weather reports and select the lowest temperature
    const currentTemperature = this.props.dayReport.main.temp;
    return this.convertTemp(currentTemperature);
  }

  convertTemp = (temperature) => {
    if(this.props.scale === "F") {
      return kelvinToFahrenheit(temperature);
    } else {
      return kelvinToCelsius(temperature);
    }
  }

  render() {
    const renderDay = () => {
      if(this.props.today) {
        return (
          <div className="day today">
            <h2 className="is-size-4">Today</h2>
            <div className="description-wrap is-size-6">
              { this.weatherDescription() }
            </div>
            <div className="temperature-wrap is-size-6">
              { this.currentTemperature() }&#176;
            </div>
          </div>
        )
      } else {
        return (
          <div className="day">
            <div className="day-name-wrap">
              <h2 className="is-size-5 mb-3">{ this.formattedDay() }</h2>
            </div>

            <div className="description-wrap is-size-6">
              { this.weatherDescription() }
            </div>

            <div className="temperature-wrap is-size-6">
              <span>{ this.hiTemp() }&#176;</span>/<span>{ this.lowTemp() }&#176;</span>
            </div>
          </div>
        )
      }
    }
    return (
      renderDay()
    );
  }
}

export default Day;