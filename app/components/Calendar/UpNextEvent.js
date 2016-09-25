import React from 'react'
import moment from 'moment'
import {css} from 'aphrodite'

import styles from './styles'

const UpNextEvent = ({upNext}) => {
  return (
    <div style={{padding: '0 10px'}}>
      <h2>Neste</h2>
      <h3 className={css(styles.title)}>{upNext.summary}</h3>
      <h3 className={css(styles.location)}>
        {upNext.location
          ? upNext.location.description
          : 'Ukjent'
        }
      </h3>
      <h4 className={css(styles.time)}>
        {moment().to(moment(upNext.start))} ({moment(upNext.start).format('HH:mm')})
      </h4>
    </div>
  )
}

UpNextEvent.propTypes = {
  upNext: React.PropTypes.object.isRequired
}

export default UpNextEvent
