import React from 'react'

import Events from './Events'


class Calendar extends React.Component {

  state = {
    events: []
  }

  componentWillMount() {
    const url = `${process.env.API_URL}/api/calendar`
    fetch(url)
      .then(response => response.json())
      .then(events => this.setState({events}))
  }

  render() {
    return this.state.events.length
      ? <Events events={this.state.events} />
      : null
  }
}

export default Calendar
