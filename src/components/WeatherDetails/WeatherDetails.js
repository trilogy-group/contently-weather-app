import React from "react";
import Results from "../Results/Results";

class WeatherDetails extends React.Component {
  state = {
    temperature: "",
    fl: "",
    description: "",
    user_city: "",
    loading: true,
    error: false
  };

  changeInput = e => {
    this.setState({ user_city: e.target.value });
  };

  getWeatherInfo = e => {
    e.preventDefault();
    const city = this.state.user_city;
    const API_KEY = "";
    const API_URL = "";

    this.setState(
      {
        weatherDetails: {},
        loading: true,
        error: false
      },
      () => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d29e9cce44012ae03806fcd9edc39a4e&units=imperial`
        )
          .then(res => res.json())
          .then(data => {
            console.log("data is", data);
            if (data.cod === 200) {
              this.setState({
                temperature: data.main.temp,
                fl: data.main.feels_like,
                description: data.weather[0].main,
                loading: false
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
    console.log("tmp", this.state.temperature);
    console.log("desc", this.state.description);

    return (
      <div>
        <form onSubmit={this.getWeatherInfo}>
          <label>
            {" "}
            Enter the City{" "}
            <input onChange={this.changeInput} type="text"></input>
            <button>Get The Weather Info</button>
          </label>
        </form>
        {this.state.temperature !== "" ? (
          <Results
            temp={this.state.tmp}
            fl={this.state.fl}
            description={this.state.description}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WeatherDetails;
