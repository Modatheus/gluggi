import React from 'react'

import {Clock, Weather, Calendar} from './components'

const App = () => {
  const digital = true
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
      height: '100%', width: '100%', backgroundColor: 'black'}}>
      <Clock digital={digital}/>
      <Weather />
      <div style={{width: '100%', display: 'flex', alignItems: 'flex-end'}}>
        <Calendar />
      </div>
    </div>
  )
}

export default App
