import React from 'react'
import Temperature from './Temperature'
import WeatherLogo from './WeatherLogo'
import styled from 'styled-components'

const CurrentWeatherSection = styled.section`
  display:flex;
  flex-direction:column;
  justify-content: center;
  text-align:left;
  align-self:center;
  margin: 32px auto;
  width: 30%;
`
const P = styled.p`
  margin:8px;
  font-size: ${({id}) => id==='location' ? '32px': '16px' };
`

const WeatherDetails = styled.section`
  text-align:left;
`

const LogoTempSection = styled.section`
  display:flex;
  flex-direction:row;
  align-items: center;
`

const CurrentWeather = ({data, isFahrenheit, updateTempScale}) => {
  const {weather, main, sys, name, dt} = data
  const {country} = sys

  const location = `${name} ${country}`
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit'}

  const currentDate = new Date(dt*1000).toLocaleDateString(undefined,options).split(',')
  const dateDayTime = `${currentDate[1]} ${currentDate[2]}`
  const dateToday = `${currentDate[0]} ${currentDate[3]}`
  const currentWeather = weather[0].main

  return (
    <CurrentWeatherSection>
      <WeatherDetails>
        <P id='location'>{location}</P>
        <P id='date'>{dateDayTime}</P>
        <P id='date'>{dateToday}</P>
        <P id='currentWeather'>{currentWeather}</P>
      </WeatherDetails>
      <LogoTempSection>
        <WeatherLogo weather={weather}/>
        <Temperature 
          isFahrenheit={isFahrenheit}
          updateTempScale={updateTempScale} 
          tempData={main}
        />
      </LogoTempSection>
    </CurrentWeatherSection>
  )
}

export default CurrentWeather
