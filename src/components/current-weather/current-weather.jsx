import React, { Fragment } from "react";
import { WeatherContent } from "../weather-content/weather-content";
import { fetchWeather, fetchFiveDayForecast } from "../../utils";
import { FiveDayForecast } from "../five-day-forecast/five-day-forecast";

export class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '', weatherResults: null, fiveDayForecast: null };

        this.handleChange = this.handleChange.bind(this);
        this.weatherSearch = this.weatherSearch.bind(this);
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }

    weatherSearch(event) {
        event.preventDefault();
        this.setState({loading: true});

        fetchWeather(this.state.city).then((results) =>
            this.setState({weatherResults: results})
        );

        fetchFiveDayForecast(this.state.city).then((results) => this.setState({ fiveDayForecast: results}))
    }

    results() {
        const { weatherResults, fiveDayForecast } = this.state;

        return (
            <Fragment>
            <h3>Weather for: {this.state.city}</h3>
            <div className="flex-grid">
                <div className="col">
                    { weatherResults ? <WeatherContent weather={ weatherResults }></WeatherContent> : '' }
                </div>
                <div className="col">
                    {fiveDayForecast ? <FiveDayForecast forecast={fiveDayForecast}></FiveDayForecast> : '' }
                </div>
            </div>
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
            <form onSubmit={this.weatherSearch}>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                <button type="submit">Search</button>
            </form>
            {this.results()}
            </Fragment>
            
        )
    }
}