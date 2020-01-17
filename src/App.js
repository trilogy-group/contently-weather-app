import React from 'react';
import './App.css';
import Form from './component/Form'
import Weather from './component/Weather'

const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e";

class App  extends React.Component{
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidety: undefined,
    description: undefined,
    icon:undefined,
    error: undefined,
  }
  
  getweather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json()

    if(city && country){
    this.setState({
      city : data.name,
      country: data.sys.country,
      temperature : data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      error: ""
    })
  } else {
    this.setState({
      city : undefined,
      country: undefined,
      temperature : undefined,
      description: undefined,
      icon: undefined,
      error: "Please Enter Value"
    })
  }
}
  render(){
  return (
    <div className="App">
     <Form getWeather={this.getweather}/>
     <Weather  
     city={this.state.city}
     country={this.state.country}
     temperature={this.state.temperature}
     description={this.state.description}
     icon={this.state.icon}
     error={this.state.error}
     />
    </div>
  );
}
}
export default App;
