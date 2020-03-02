import React from 'react';
import { WeatherCard } from './WeatherCard';

export const WeeklyCards = (props) =>{
    const {city, weather} = props.weather;
    return (
        !city ? '':
        <div className='daily_cards'>
            {weather.map((weather, idx) =>{
                return( 
                    <WeatherCard key={idx + 1} weather={weather} />
                );
            })}
        </div>
    );
};