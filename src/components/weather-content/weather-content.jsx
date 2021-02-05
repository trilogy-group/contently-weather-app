import React, { Fragment } from "react";
import "../../App.css";

export class WeatherContent extends React.Component {
    render() {
        const { main, weather: [localWeather], name } = this.props.weather;
        return(
            <ul>
                <li>Temperature: {main.temp} &deg;F</li>
                <li>Weather: {localWeather.description}</li>
                <li>Feels like: {main.feels_like} &deg;F</li>
                <li>Humidity: {main.humidity} &deg;F</li>
            </ul>
        )
    }
}