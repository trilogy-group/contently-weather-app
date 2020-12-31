import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {fetchWeather} from '../utils';
import "../Card.css";
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const Forcast = () => {
  let { geoLocation } = useParams();
  const [fiveDayForcast, setFiveDayForcast] = useState({});
  const [units, setUnits] = useState("imperial");
  useEffect(() => {
    fetchWeather(geoLocation.split(","), units).then(function ({data}) {
      const dates = {};
      const parsedFiveDayForcast = data.list.filter(function(entry) {
          if (dates[entry.dt_txt.split(" ")[0].toString()]) {
              return false;
          }
          dates[entry.dt_txt.split(" ")[0].toString()] = true;
          return true;
      });
      setFiveDayForcast({city: data.city.name, forcast: parsedFiveDayForcast});
    }).catch(function () {
    });
  }, [geoLocation, units]);


  return (
    <div className="card">
      <h6> current units {units === "imperial" ? 'fahrenheit' : 'celsius'} </h6>
      <h2>{fiveDayForcast.city}</h2>
      <div className="sky-container">
        <div className="sky">
            <div className="sun"></div>
            <div className="cloud">
                <div className="circle-small"></div>
                <div className="circle-tall"></div>
                <div className="circle-medium"></div>
            </div>
        </div>
      </div>
      <button onClick={() => setUnits(units === "imperial" ? "metric" : "imperial")} className="unit-button">
        toggle Units
      </button>
      <table>
        <tbody>
          <tr className="dates">
            {fiveDayForcast?.forcast?.map((day) => ( <td key={day.dt_txt}>{days[new Date(day.dt_txt).getDay()].substr(0,3)}</td> ))}
          </tr>
          <tr className="high">
            {fiveDayForcast?.forcast?.map((day) => ( <td key={day.dt}>{day.main.temp_max.toString().split(".")[0]}°</td> ))}
          </tr>
          <tr className="low">
            {fiveDayForcast?.forcast?.map((day) => ( <td key={day.main.temp_min}>{day.main.temp_min.toString().split(".")[0]}°</td> ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Forcast;
