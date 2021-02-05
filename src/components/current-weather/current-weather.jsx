import React, { Fragment } from "react";
import { WeatherContent } from "../weather-content/weather-content";
import { fetchWeather } from "../../utils";

export class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '', loading: false, weatherResults: null };

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
            this.setState({weatherResults: results, loading: false})
        )
    }

    render() {
        const { loading, weatherResults } = this.state;

        return (
            <Fragment>
            <form onSubmit={this.weatherSearch}>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                <button type="submit">Search</button>
            </form>
            { loading ? 'Loading...' : '' }
            { weatherResults ? <WeatherContent weather={ weatherResults }></WeatherContent> : '' }
            </Fragment>
            

            
        )
    }
}