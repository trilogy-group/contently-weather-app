import React, {useState} from "react";
import * as moment from 'moment';
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';
import sun from '../images/sun.svg';
import sunny from '../images/sunny.png';





const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(5,0.8fr)",
    minHeight: "10vh",
    fontSize: "calc(3px + 2vmin)",
    color: "white",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
}


export default function Weekly(props) {

const [toggle, setToggle] = useState(true);

const forecast = (shortForecast) =>{
    console.log("shortForecast", shortForecast)
    if(shortForecast.includes("rain") || shortForecast.includes("showers")){
        return rainy;
    }else if(shortForecast.includes("fog") ){
        return cloudy;
    }else{
        return sunny;
    }
}

  return (
    <div>
        <h1>
        Weekly Holder
        {props.dayPeriods.map((item, index) => {
            return(
                <div style={grid} key={item.number}>
                    <span>
                        <strong>Start Time</strong>
                    </span>
                    <span>
                        <strong>End Time</strong>
                    </span>
                     <span>
                        <strong>Temperature</strong>
                    </span>
                    <span>
                        <strong>Icon</strong>
                    </span> 
                    <span>
                        {moment(item.startTime).format('LLL')}
                    </span>
                    <span>
                        {moment(item.endTime).format('LLL')}
                    </span>
                    <span onClick={()=>setToggle(!toggle)}>
                        {toggle ? item.temperature : props.celsiusConvert(item.temperature)}
                    </span>
                    <span>
                        <img src={forecast(item.shortForecast.toLowerCase())}></img>
                    </span>
                </div>
            )
        })}
        </h1>
    </div>
  )
}