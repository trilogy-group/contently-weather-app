import React, {useEffect,useState} from 'react'
import styled from 'styled-components'

const TemperatureSection = styled.section `
  text-align:left;
  display:flex;
  flex-direction:row;
  padding-left: 32px;
`

const HighLowTempSection = styled.section`
  padding-left: 32px; 
`

const TempScaleSpan = styled.span`
  color: ${({disabled}) => disabled ? 'black' : 'white'};
  font-size: 32px;
`

const TempScaleSup = styled.sup`
  padding-left: 8px;
  font-size: 16px;
`

const CurrentTemp = styled.p`
  font-size: 32px;
`

function calculateFahrenheit(tempData){
  for(const temp of Object.keys(tempData)){
    let celsius = tempData[temp]
    tempData[temp] = Math.round(celsius * 9 / 5 + 32) 
  }
  return tempData
}

function calculateCelsius(tempData){
  for(const temp of Object.keys(tempData)){
    tempData[temp] = Math.round((tempData[temp] - 32) * 5 / 9) 
  }
  return tempData
}

function roundData(tempData){
  for(const temp of Object.keys(tempData)){
    tempData[temp] = Math.round(tempData[temp])
  }
  return tempData
}



const Temperature = ({isFahrenheit,updateTempScale, tempData}) => {
  const[currentTempData,updateTemp] = useState({})

  function handleTemperatureChange(e){
    if(e.target.innerText==='F'){
      updateTempScale(true)
      updateTemp(calculateFahrenheit)
    } else {
      updateTempScale(false)
      updateTemp(calculateCelsius)
    }
  }
  useEffect(() => {
    updateTemp(tempData)
  },[tempData])

  const {temp,temp_min,temp_max} = roundData(currentTempData)
  return (
    <TemperatureSection>
      <CurrentTemp>
          {temp} 
        <TempScaleSup>
          <TempScaleSpan onClick={handleTemperatureChange} disabled={isFahrenheit}>
            F
          </TempScaleSpan>
          | 
          <TempScaleSpan onClick={handleTemperatureChange} disabled={!isFahrenheit}>
            C
          </TempScaleSpan>
        </TempScaleSup>
      </CurrentTemp>
      <HighLowTempSection>
        <p>High: {temp_max}</p>
        <p>Low: {temp_min}</p>
      </HighLowTempSection>
    </TemperatureSection>
  )
}

export default Temperature;
