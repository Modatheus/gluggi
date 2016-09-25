import React from 'react'
import {css} from 'aphrodite'

import weatherIcons from './weatherIcons'
import styles from './styles'
import Forecast from './Forecast'
import WeatherInfo from './WeatherInfo'

const API_BASE_URL = 'http://api.openweathermap.org'

class Weather extends React.Component {

  state = {
    current: null,
    forecast: null
  }

  static propTypes = {
    node: React.PropTypes.object
  }

  componentWillReceiveProps({lat, lon}) {
    if (lat && lon) {
      this.fetchWeather(lat, lon)
    }
  }

  fetchWeather(lat, lon) {
    const url = `${process.env.API_URL}/api/weather?lat=${lat}&lon=${lon}`
    fetch(url)
      .then(response => response.json())
      .then(({current, forecast})=> {
        this.setState({current, forecast})
      })
  }

  render() {
    const {current, forecast} = this.state
    return (
      <div>
        {current ? <WeatherInfo weather={current}/> : null }
        {forecast ? <Forecast forecasts={forecast}/> : null }
      </div>
    )
  }
}

export default Weather
