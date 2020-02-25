import React from "react";

class WeatherDetails extends React.Component {
  state = {
    data: [],
    user_city: ""
  };

  changeInput = e => {
    this.setState({ user_city: e.target.value });
  };

  getWeatherInfo = e => {
    e.preventDefault();
    if (this.state.user_city.length === 0) {
      alert("Please enter a city");
    } else {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.user_city}&appid=d29e9cce44012ae03806fcd9edc39a4e&units=imperial`
      )
        .then(response => response.json())
        .then(console.log(response.status));
      // .then(data => this.setState({ data }))
      // .catch(error => console.error("Error : ", error));
    }
  };

  render() {
    const weather_info = this.state.data.main;
    // const result = this.state.data.main && Object.values(this.state.data.main);
    const result =
      weather_info && Object.keys(weather_info).map(key => weather_info[key]);

    console.log(result);

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
        {/* <ul>
          {result &&
            result.map(res => {
              return <h2>{res}</h2>;
            })}
        </ul> */}
      </div>
    );
  }
}

export default WeatherDetails;
