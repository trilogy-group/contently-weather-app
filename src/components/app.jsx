import React, {useState} from "react";
// import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";
import Header from "./Header"
import WeatherView from "./WeatherView"
import FetchWeather from "../utils"

function App() {
  const [selectedCity, updateCity] = useState('')
  const [success,updateStatus] = useState(false)
  const [data,updateData] = useState({})
  const [isFahrenheit,updateTempScale] = useState(true)

  async function handleSubmit(e){
    e.preventDefault()
    if(selectedCity){
      const weatherData = await FetchWeather(selectedCity)

      weatherData.hasOwnProperty('error') ?
        updateStatus(false) :
        updateStatus(true)

      updateData(weatherData)
      updateTempScale(true)
    }
    
  }
  const description = data.hasOwnProperty('error') ? 
    'You inputted an invalid city name! Try another city' :
    'Which place in the world do you wish to see the weather for?' 

  return (
    <main>
        <h3> {description} </h3>
        <Header handleSubmit={handleSubmit} updateCity={updateCity} />
        <WeatherView 
          isFahrenheit={isFahrenheit}
          updateTempScale={updateTempScale}
          data={data} 
          success={success}
        /> 
      </main>
  )    
}

export default App;
