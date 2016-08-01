import React from 'react'
import {css} from 'aphrodite'

import styles from './styles'

const WeatherMeta = ({general, meta, wind, percipitation}) => {
  const temp = parseInt(meta.temp, 10)
  const tempMin = Math.round(meta.tempMin * 10) / 10
  const tempMax = Math.round(meta.tempMax * 10) / 10

  const {city, country} = general

  return (
    <div className={css(styles.metaContainer)}>
      <div className={css(styles.metaRow)}>
        <h1 className={css(styles.metaValue)}>{temp} <i className="wi wi-celsius"/></h1>
        <h3 className={css(styles.metaValue)}>{city}, {country}</h3>
      </div>
      <div className={css(styles.metaRow)}>
        <p className={css(styles.metaValue)}>
          <i className="wi wi-humidity" style={{marginRight: 10}}/>
          {meta.humidity}%
        </p>
        <p className={css(styles.metaValue)}>
          <i
            className="wi wi-sleet"
            style={{marginRight: 10}}/>
          {Math.round(percipitation.amount * 10) / 10} mm
        </p>
      </div>
      <div className={css(styles.metaRow)}>
        <p className={css(styles.metaValue)}>
          <i className="wi wi-wind" style={{transform: `rotate(${wind.deg}deg)`, marginRight: 10}}/>
          {wind.speed} m/s
        </p>
        <p className={css(styles.metaValue)}>
          <i className="wi wi-thermometer" style={{marginRight: 10}}/>
          {tempMin}
          <i style={{margin: '0 5px 0 2px'}}className="wi wi-celsius"/>
           <span style={{marginRight: 5}}>-</span>
          {tempMax}
          <i style={{margin: '0 5px 0 2px'}}className="wi wi-celsius"/>
        </p>
      </div>
    </div>
  )
}

WeatherMeta.propTypes = {
  general: React.PropTypes.object.isRequired,
  meta: React.PropTypes.object.isRequired,
  wind: React.PropTypes.object.isRequired,
  percipitation: React.PropTypes.object.isRequired,
}

export default WeatherMeta
