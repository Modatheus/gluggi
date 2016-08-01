import React from 'react'
import moment from 'moment'

import CalendarIcon from 'material-design-icons/action/svg/production/ic_date_range_24px.svg'
import ClockIcon from 'material-design-icons/action/svg/production/ic_schedule_24px.svg'
import LocationIcon from 'material-design-icons/communication/svg/production/ic_location_on_24px.svg'

const Event = ({summary, location, time}) => {
  return (
    <div style={{width: 300, display: 'flex', flexWrap: 'wrap'}}>
      <h5 style={{width: '100%', display: 'flex', alignItems: 'center', margin: '2px 0'}}>
        <CalendarIcon fill="white" style={{marginRight: 5}}/>
        {summary}
      </h5>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {location
          ? <p style={{width: '100%', margin: '2px 0', display: 'flex', alignItems: 'center'}}>
            <LocationIcon fill="white" style={{marginRight: 5}}/>
            {location.description}
          </p>
          : null
        }
        <p style={{width: '100%', margin: '2px 0', display: 'flex', alignItems: 'center'}}>
          <ClockIcon fill="white" style={{marginRight: 5}}/>
          {time}
        </p>
      </div>
    </div>
  )
}

Event.propTypes = {
  summary: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  location: React.PropTypes.object
}

export default Event
