import React from 'react'
import styled from 'styled-components'

import Sunny from '../../images/sunny.png'
import Cloudy from '../../images/cloudy.png'
import Rainy from '../../images/rainy.png'
import Snowy from '../../images/snow.png'

const Img = styled.img`
  height:100px;
  width:100px;
`

const WeatherLogo = ({weather}) => {
  const {main} = weather[0]
  let id = Number(weather[0].id)
  let src = ''
  if(id === 800){
    src = Sunny
  } else if(id >= 700){
    src = Cloudy
  } else if(id >= 600){
    src = Snowy
  } else if(id >= 200){
    src = Rainy
  }

  return (
    <section>
      <Img src={src} alt={main} />
    </section>
  )
}

export default WeatherLogo;
