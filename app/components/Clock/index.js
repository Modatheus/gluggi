import React, {Component} from 'react'
import styles from './styles'

class Clock extends Component {

  static propTypes = {
    digital: React.PropTypes.bool
  }

  updateTime() {
    let time = new Date()
    let hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours()
    let minutes = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()
    let seconds = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds()

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  }

  componentWillMount() {
    this.updateTime()
    const interval = window.setInterval(::this.updateTime, 1000)
    this.setState({interval})
  }

  componentWillUnmount() {
    window.clearInterval(this.state.interval)
  }

  render() {
    const {hours, minutes, seconds} = this.state
    const secondsDeg = seconds / 60 * 360
    const minutesDeg = minutes / 60 * 360
    const hourOffset = minutes / 60
    const hoursMinutes = hours + hourOffset
    const hoursDeg = hours > 12 ? (hoursMinutes - 12) / 12 * 360 : hoursMinutes / 12 * 360

    const hoursStyle = Object.assign(
      {}, styles.pointerStyle,
      {transform: `rotate(${hoursDeg}deg)`, height: 30}
    )
    const minutesStyle = Object.assign(
      {}, styles.pointerStyle,
      {transform: `rotate(${minutesDeg}deg)`}
    )
    const secondsStyle = Object.assign(
      {}, styles.pointerStyle,
      {transform: `rotate(${secondsDeg}deg)`, backgroundColor: 'red'}
    )

    return this.props.digital
    ? (
      <div style={{paddingLeft: 40}}>
        <h1 style={{fontSize: 62}}>
          {hours || '00'}
          <span style={{marginBottom: 5}}> : </span>
          {minutes || '00'}
        </h1>
      </div>
    )
    : (
      <div style={styles.clockContainer}>
        <div style={secondsStyle}></div>
        <div style={minutesStyle}></div>
        <div style={hoursStyle}></div>
      </div>
    )
  }
}

export default Clock
