import React from 'react'
import CurrentWeather from './CurrentWeather'

const WeatherView = ({data,success,updateTempScale,isFahrenheit}) => {
  if(success) {
    if(data.cod){
      return(
          <CurrentWeather 
            data={data}
            isFahrenheit={isFahrenheit}
            updateTempScale={updateTempScale}
          />
      )
    } else {
      return (
        <section>
          <h3> Loading data... </h3>
        </section>
      )
    }
  }
  return (<> </>)
}


export default WeatherView;
