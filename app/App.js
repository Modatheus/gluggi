import React from 'react'

import {Clock, Weather, Calendar} from './components'

class App extends React.Component {

  state = {
    lat: null,
    lon: null
  }

  constructor(props) {
    super(props)
    this.location = ::this.location
  }

  componentWillMount() {
    if (navigator) {
      navigator.geolocation.watchPosition(this.location, this.failedLocation)
    }
  }

  failedLocation(error) {
    console.log('failed to get location')
    console.log(error)
  }

  location({coords}) {
    const {latitude, longitude} = coords
    this.setState({lat: latitude.toFixed(2), lon: longitude.toFixed(2)})
  }

  render() {
    const digital = true
    const {lat, lon} = this.state
    return (
      <div style={{
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
        height: '100%', width: '100%', backgroundColor: 'black'}}>
        <Clock digital={digital}/>
        <Weather lat={lat} lon={lon}/>
        <div style={{width: '100%', display: 'flex', alignItems: 'flex-end'}}>
          <Calendar lat={lat} lon={lon}/>
        </div>
      </div>
    )
  }
}

export default App
