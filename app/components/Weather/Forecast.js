import React from 'react'

import WeatherInfo from './WeatherInfo'

const smallMode = true
const Forecast = ({forecasts}) => {

  return (
    <div style={{display: 'flex', width: '100%', paddingLeft: 35}}>
      {forecasts.map((weather, index) => (
        <WeatherInfo key={index} smallMode={smallMode} weather={weather}/>
      ))}
    </div>
  )
}

Forecast.propTypes = {
  forecasts: React.PropTypes.array.isRequired

}

export default Forecast
