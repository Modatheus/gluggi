import React from 'react'
import {css} from 'aphrodite'
import moment from 'moment'

import WeatherMeta from './WeatherMeta'
import getWeatherIcon from './weatherIcons'
import styles, {iconStyle, smallIconStyle} from './styles'

const WeatherInfo = ({weather, smallMode}) => {
  const {time, meta, general} = weather
  const weatherTime = time ? moment(time, 'HH:mm') : moment()
  const icon = getWeatherIcon(
    meta.weatherType.toLowerCase(),
    weatherTime,
    general.sunrise,
    general.sunset,
    meta.clouds
  )
  const weatherIcon = React.cloneElement(
    icon,
    {style: smallMode ? smallIconStyle : iconStyle}
  )
  console.log(weather)
  return (
    <div className={css(smallMode ? styles.smallContainer : styles.container)}>
      {weatherIcon}
      {smallMode
        ? <div>
          <h3 style={{margin: '10px 0 5px 0'}}>
            {parseInt(meta.temp, 10)}
            <i className="wi wi-celsius" style={{marginLeft: 5}}/>
          </h3>
          <p style={{margin: 0}}>{moment(time).format('HH:mm')}</p>
        </div>
        : <WeatherMeta
            general={general} meta={meta}
            wind={weather.wind} percipitation={weather.percipitation}/>
      }
    </div>
  )
}

WeatherInfo.propTypes = {
  weather: React.PropTypes.object.isRequired,
  smallMode: React.PropTypes.bool
}

export default WeatherInfo
