import React from "react";
import Results from "../Results/Results";
import "./WeatherDetails.css";

class WeatherDetails extends React.Component {
  state = {
    temperature: "",
    fl: "",
    description: "",
    user_city: "",
    type: false,
    loading: true,
    error: false,
    country: ""
  };

  changeInput = e => {
    this.setState({ user_city: e.target.value });
  };

  changeTmp = e => {
    e.preventDefault();
    this.setState({
      type: !this.state.type,
      temperature: this.state.type
        ? parseFloat((this.state.temperature * 9) / 5 + 32).toFixed(2)
        : parseFloat(((this.state.temperature - 32) * 5) / 9).toFixed(2),
      fl: this.state.type
        ? parseFloat((this.state.fl * 9) / 5 + 32).toFixed(2)
        : parseFloat(((this.state.fl - 32) * 5) / 9).toFixed(2)
    });
  };

  getWeatherInfo = e => {
    console.log("key is", process.env.REACT_APP_WEATHER_API_KEY);
    e.preventDefault();
    const city = this.state.user_city;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    this.setState(
      {
        weatherDetails: {},
        loading: true,
        error: false
      },
      () => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
        )
          .then(res => res.json())
          .then(data => {
            console.log("data is", data);
            if (data.cod === 200) {
              this.setState({
                temperature: data.main.temp,
                fl: data.main.feels_like,
                description: data.weather[0].main,
                loading: false,
                country: data.sys.country
              });
            } else {
              alert(data.message);
            }
          })
          .catch(err => {
            console.log(err);
            this.setState({
              loading: false,
              error: true
            });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <img
          className="contently-tag"
          src="https://3v9p073zptntqyvo83pwbx1h-wpengine.netdna-ssl.com/wp-content/themes/contently-new/images/logo/logo.png"
        />
        <form className="form-container" onSubmit={this.getWeatherInfo}>
          <h4>Location: </h4>
          <input
            placeholder="City Name"
            onChange={this.changeInput}
            type="text"
          ></input>
          <hr />
          <button className="weather-button">Get The Weather Info</button>
        </form>
        {this.state.temperature !== "" ? (
          <Results
            temp={this.state.temperature}
            fl={this.state.fl}
            description={this.state.description}
            type={this.state.type}
            changeTmp={this.changeTmp}
            country={this.state.country}
            city={this.state.user_city}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WeatherDetails;
