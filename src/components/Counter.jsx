import React from 'react'

const Counter = ({setText, timerDays, timerHours, timerMinutes, timerSeconds }) => {

  return (
  
     <div style={{
      width: "400px", display: 'flex',
      alignItems: 'center', margin: '0 auto', gap: '10px',
      justifyContent: 'center'
    }}>
      <section>
        <p>{timerDays}</p>
        <span>Days</span>
      </section>

      <section>
        <p>{timerHours}</p>
        <span>Hours</span>
      </section>

      <section>
        <p>{timerMinutes}</p>
        <span>Minutes</span>
      </section>

      <section>
        <p>{timerSeconds}</p>
        <span>Seconds</span>
      </section>
    </div> 
  )
}

Counter.defaultProps = {
  timerDays : 20,
  timerHours: 20,
  timerMinutes: 20,
  timerSeconds: 20
}

export default Counter