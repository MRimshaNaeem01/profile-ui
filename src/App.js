import './App.scss';
import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import ProfileForm from './components/ProfileForm';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [text, setText] = useState("");

  let interval;
  const startTime = () => {
    const countDownDates = new Date("Jan 1, 2024 2:00:00").getTime()
    const countDownStartTime = new Date("Jan 1, 2024 2:20:00").getTime();
    const countDownEndTime = new Date("Jan 1, 2024 3:01:00").getTime();


    interval = setInterval(() => {
      const now = new Date().getTime();
      console.log(now, "now");

      const distance = countDownStartTime - now;
      console.log(distance, "distance");

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
      const seconds = Math.floor(distance % (60 * 1000) / (1000))

      if (distance < 0) {
        console.log("count down stop because it passed")
      setText("passed")
      }
      else {
        console.log("count down start")
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
        setText={setText}
      }
    }
    )
  }
  useEffect(() => {
    startTime()
  })
  return (
    <div className="App">
      {/* <Header />
     <ProfileForm /> */}
      <Counter
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />

      {/* https://www.youtube.com/watch?v=RwlFyS1Rhew */}
    </div>
  );
}

export default App;
