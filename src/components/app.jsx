import React, {useState, useEffect} from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
//import * as moment from 'moment'
import axios from 'axios';
import Daily from './daily.js';
import Weekly from './weekly.js';
import APIKEY from './../.env';

import "../App.css";



function App(props) {
  const [address, setAddress] = useState(" ");
  const [addressLabel, setAddressLabel] = useState(" ");
  const [weatherData, setWeatherData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [avgFahrenheit, setAvgFahrenheit] = useState([]);
  const [dayPeriods, setDayPeriods] = useState([]);
  



  useEffect(() => {
    //fetchLocationData()
    //fetchWeatherData()
  }, [])

  // `http://api.positionstack.com/v1/forward?access_key=29b3fc41eb9ae02f2b44fb9c3115b1fb&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`
  // `https://api.weather.gov/points/30.3322,-81.6557`
   const fetchLocationData = async(event) =>{
     event.preventDefault();
    const response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=29b3fc41eb9ae02f2b44fb9c3115b1fb&query=${address}`, {
      headers: {}
    })
    try{
      setLocationData(response.data.data[0])
      setAddressLabel(response.data.data[0].label)
      console.log('response', response)

    } catch(err){
      alert(err)
    }
    fetchWeatherData(response.data.data[0].longitude, response.data.data[0].latitude)
  }

   const fetchWeatherData = async(longitude, latitude) =>{
    const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`, {
      headers: {}
    })
    try{
      const forecast = await axios.get(response.data.properties.forecast)
      let chartValues = forecast.data.properties.periods.map((cv) => cv.temperature);
      let dayPeriods = forecast.data.properties.periods.filter(item => item.isDaytime === true);
      console.log("dayPeriods", dayPeriods)
      setDayPeriods(dayPeriods);
      setAvgFahrenheit(arrAvg(chartValues));
    } catch(err){
      alert(err)
    }
  }

  const arrAvg = (arr) => {
    let length = arr.length
    let sum =  arr.reduce((a,b) => a + b)
    return `${Math.round(sum / length)}F°`;
  }

  const handleInput = (event) => {
    event.preventDefault();
    setAddress(event.target.value)
  }

  const celsiusConvert =(avgFahrenheit) => {
    var celsiusTemp = Math.round((parseInt(avgFahrenheit)-32)*5/9)
    return `${celsiusTemp}C°`
  }

  return (
    <div>
    <h1>Weather</h1>
    <form onSubmit={fetchLocationData}>
      <input type="text" value={address} onChange={handleInput}/>
      <input type="submit" value="submit"/>
    </form>
    {addressLabel}
    <Daily fahrenheit={avgFahrenheit} celsiusConvert={celsiusConvert} />
    <Weekly dayPeriods={dayPeriods} celsiusConvert={celsiusConvert} />
  </div>
  )

}

export default App;
