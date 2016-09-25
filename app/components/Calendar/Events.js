import React from 'react'
import moment from 'moment'

import Event from './Event'
import UpNextEvent from './UpNextEvent'

moment.locale('nb')

class Events extends React.Component {

  static propTypes = {
    events: React.PropTypes.array.isRequired
  }

  upNext() {
    return this.props.events[0]
  }

  today() {
    return this.props.events.filter((ev, index) => {
      return moment(ev.start).isBefore(moment().hour(24).minute(0)) && index !== 0
    })
  }

  tomorrow() {
    return this.props.events.filter((ev, index) => {
      return moment(ev.start).isBefore(moment().hour(48).minute(0))
        && moment(ev.start).isAfter(moment().hour(24).minute(0))
        && index !== 0
    })
  }

  render() {
    const upNext = this.upNext()
    const today = this.today()
    const tomorrow = this.tomorrow()
    return (
      <div style={{padding: 20, display: 'flex'}}>
        {upNext ? <UpNextEvent upNext={upNext} /> : null}
        {today.length
          ? <div style={{padding: '0 10px'}}>
            <h2>I dag</h2>
            {today.map(({event_uid, summary, location, start, end}) => (
              <Event
                key={event_uid}
                time={`${moment().to(moment(start))} (${moment(start).format('HH:mm')})`}
                summary={summary} location={location}/>
            ))}
          </div>
          : null
        }
        {tomorrow.length
          ? <div style={{padding: '0 10px'}}>
            <h2>I morgen</h2>
            {tomorrow.map(({event_uid, summary, location, start, end}) => (
              <Event
                key={event_uid}
                time={`${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`}
                summary={summary} location={location}/>
            ))}
          </div>
         : null
        }
      </div>
    )
  }
}

export default Events
