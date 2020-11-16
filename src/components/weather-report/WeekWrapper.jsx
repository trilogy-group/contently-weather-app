import React from "react";
import Day from "./Day.jsx";
import ScaleToggleButton from "./ScaleToggleButton.jsx";

import { fetchWeather } from "../../utils.js";

class WeekWrapper extends React.Component {

  handleScaleToggleClick = (newScale) => {
    this.setState({scale: newScale});
  }
  
  setWeatherReport = () => {
    fetchWeather(this.props.zipCode)
      .then( response => {
        this.setState({weatherReport: response});
        
        const filteredDailyWeatherReport = response.list.filter(dayReport => {
            // Given more time I would pass all the reports for any given day
            // I opted to filter a time that is likely to be returned in any given API request

            return dayReport.dt_txt.includes("21:00:00")
          }
        )
        this.setState({dailyWeatherReport: filteredDailyWeatherReport});
        this.props.cityNameChangedAction(response.city.name)
      })
      .catch((error) => console.error('Error:', error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.zipCode !== this.props.zipCode) {
      this.setWeatherReport();
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      weatherReport: null,
      dailyWeatherReport: null,
      scale: "F"
    }
  }

  componentDidMount = () => {
    this.setWeatherReport();
  }

  render() {
    const renderWeekOrEmptyMessage = () => {
      if(this.state.dailyWeatherReport) {
        return (
          <div className="week-wrap with-selected-city">
            <div className="scale-selector-wrap mb-5" >
              <ScaleToggleButton scale={"F"} clickAction={this.handleScaleToggleClick} style="mr-3"/>
              <ScaleToggleButton scale={"C"} clickAction={this.handleScaleToggleClick} style="ml-3"/>
            </div>

            {this.state.dailyWeatherReport.map((dailyReport, index) => (
              <Day scale={this.state.scale} dayReport={dailyReport} today={index == 0} key={index}/>  
            ))}
          </div>
        )
      } else {
        return (
          <div className="week-wrap">
            <h3>Please enter a city name to get the weather report.</h3>
          </div>
        )
      }
    }
    return (
      renderWeekOrEmptyMessage()
    );
  }

}


export default WeekWrapper;