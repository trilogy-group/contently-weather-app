import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";
import { CitySearch } from './CitySearch';
import { WeeklyCards } from './WeeklyCards'; 
import { UnitSwitch } from './UnitSwitch'; 
import {fetchWeather} from '../utils';

function App() {
  const [weatherForecast, setWeatherForecast] = useState({});
  let [unit, setUnit] = useState('imperial');
  const [currentCity, setCurrentCity] = useState('New York');

  
  let handleSubmit = async (e) =>{
    e.preventDefault();
    window.location.replace(currentCity);
    let data = await fetchWeather(currentCity, unit);
    setWeatherForecast(data);
  };

  useEffect(()=>{
     const fetchData = async () =>{
        const [cityName, newUnit] = document.location.pathname.slice(1).replace(/%20/g, " ").split('/');
        if(newUnit){
          unit = newUnit;
          setUnit(newUnit);
        }
        let data = await fetchWeather(cityName, unit);
        setCurrentCity(cityName);
        setWeatherForecast(data);
    }
    if (document.location.pathname !== "/") {
      fetchData();
    }

  }, [])

  useEffect(()=>{
    const fetchData = async () =>{
      let data = await fetchWeather(currentCity, unit);
      setWeatherForecast(data);
    };
    fetchData();
  },[unit])
  
  return (
    <div className='container'>
      <Logo className='logo' />
      <h1>Weather</h1>
      <UnitSwitch unit={unit} setUnit={setUnit}/>
      <CitySearch currentCity={currentCity} setCurrentCity={setCurrentCity} handleSubmit={handleSubmit}/>
      <WeeklyCards weather={weatherForecast}/>
    </div>
  );
}

export default App;
