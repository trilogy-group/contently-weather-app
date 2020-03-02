import React from 'react';

export const WeatherCard = (props) =>{
    const {weather} = props;
    const day = Object.keys(weather)[0];
    const createCard = () =>{
        return(
            <div className='daily_card'>
                <h3>{day}</h3>
                <img src={weather[day].iconLink} alt={weather[day].sky}/>
                <div>{weather[day].sky}</div>
                <div>High {Math.floor(weather[day].temp.temp_max)} {weather[day].unit}</div>
                <div>Low {Math.floor(weather[day].temp.temp_min)} {weather[day].unit}</div>
            </div>
        );
    };
    return(!weather ? '' : createCard());
};