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

  constructor(props) {
    super(props)
    this.location = ::this.location
    this.fetchWeather = ::this.fetchWeather
  }

  componentWillMount() {
    if (navigator) {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.location, this.failedLocation, {timeout: 10000})
    }
  }

  failedLocation() {
    console.log('failed to get location')
  }

  location({coords}) {
    const {latitude, longitude} = coords
    this.fetchWeather(latitude.toFixed(2), longitude.toFixed(2))
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
