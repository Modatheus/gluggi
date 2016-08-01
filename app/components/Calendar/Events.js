import React from 'react'
import moment from 'moment'

import Event from './Event'

moment.locale('nb')

const Events = ({events}) => {

  const today = events.filter(ev => {
    return moment(ev.start).isBefore(moment().hour(24).minute(0))
  })


  const tomorrow = events.filter(ev => {
    return moment(ev.start).isBefore(moment().hour(48).minute(0))
      && moment(ev.start).isAfter(moment().hour(24).minute(0))
  })

  return (
    <div style={{padding: 20, display: 'flex'}}>
      {today.length
        ? <div>
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
        ? <div>
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

Events.propTypes = {
  events: React.PropTypes.array.isRequired
}

export default Events
