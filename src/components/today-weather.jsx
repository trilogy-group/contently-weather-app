import { getWeatherPic } from "../images/index";

function Today (props) {
  const img = getWeatherPic(props.weather.weather[0].main);
  return (
    <div>
      <img src={img} alt="Weather" height="200" width="200"/>
      <h5>Right Now</h5>
      <p>{props.weather.weather[0].main}: {props.weather.weather[0].description}</p>
      <p>Feels like: {props.weather.feels_like}{'\u00b0'}{props.units === "imperial" ? 'F' : 'C'}</p>
      <p>Actual temp: {props.weather.temp}{'\u00b0'}{props.units === "imperial" ? 'F' : 'C'}</p>
    </div>
  );
}

export default Today;
