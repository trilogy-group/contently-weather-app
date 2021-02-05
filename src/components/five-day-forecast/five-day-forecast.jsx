import React, { Fragment } from "react";
import { WeatherContent } from "../weather-content/weather-content";

export class FiveDayForecast extends React.Component {
    renderForecast(forecast) {
        return (
            <Fragment key={forecast.dt}>
                <h4>{forecast.dt_txt}</h4>
                <WeatherContent weather={forecast}></WeatherContent>
            </Fragment>
        )
    }

    render() {
        console.log(this.props);
        return(
            <Fragment>
                <h3>Five day forecast</h3>
                { this.props.forecast.list.map(item => this.renderForecast(item)) }
            </Fragment>
        )
    }
}