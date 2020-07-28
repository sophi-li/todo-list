import React, { useState, useEffect } from 'react'

import './TimerCard.css'

const TimerCard = () => {
  const [timerState, setTimerState] = useState('tomatimer')
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 25,
    seconds: 0,
  })
  const [paused, setPaused] = useState(true)
  const [timerFinished, setTimerFinished] = useState(true)

  const audioTune = new Audio('/swing.m4a')

  const startTimer = () => {
    setPaused(!paused)
    setTimerFinished(!timerFinished)
  }

  const tick = () => {
    // do nothing if paused or timer is over
    if (paused || timerFinished) {
      return
    }
    // set timerfinished state to true & reset to 25min when timer is up
    if (timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
      setTimerFinished(true)
      setPaused(true)
      if (timerState === 'longBreak') {
        setTimeRemaining({
          minutes: 25,
          seconds: 0,
        })
        setTimerState('tomatimer')
      } else {
        setTimerState('shortBreak')
        setTimeRemaining({
          minutes: 5,
          seconds: 0,
        })
      }
      audioTune.play()
      // decrement minutes
    } else if (timeRemaining.seconds === 0) {
      setTimeRemaining({ minutes: timeRemaining.minutes - 1, seconds: 59 })
    } else {
      // decrement seconds
      setTimeRemaining({
        minutes: timeRemaining.minutes,
        seconds: timeRemaining.seconds - 1,
      })
    }
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timerID)
    }
  })

  const changeState = (e) => {
    e.preventDefault()
    setPaused(true)
    let currentState = e.target.value

    switch (currentState) {
      case 'tomatimer':
        setTimerState('tomatimer')
        setTimeRemaining({
          minutes: 25,
          seconds: 0,
        })
        break
      case 'shortBreak':
        setTimerState('shortBreak')
        setTimeRemaining({
          minutes: 5,
          seconds: 0,
        })
        break
      case 'longBreak':
        setTimerState('longBreak')
        setTimeRemaining({
          minutes: 15,
          seconds: 0,
        })
        break
      default:
        console.log('default')
    }
  }

  return (
    <div className="timerCardContainer">
      <div className="settingsContainer">
        <button
          onClick={changeState}
          value="tomatimer"
          className={`tomatimerBtn ${
            timerState === 'tomatimer' ? 'activeBtn' : null
          }`}
        >
          Tomatimer
        </button>
        <button
          onClick={changeState}
          value="shortBreak"
          className={`shortBreakBtn ${
            timerState === 'shortBreak' ? 'activeBtn' : null
          }`}
        >
          Short Break
        </button>
        <button
          onClick={changeState}
          value="longBreak"
          className={`longBreakBtn ${
            timerState === 'longBreak' ? 'activeBtn' : null
          }`}
        >
          Long Break
        </button>
      </div>
      <div className="time">
        {timeRemaining.minutes.toString().padStart(2, '0')}:
        {timeRemaining.seconds.toString().padStart(2, '0')}
      </div>
      <div>
        <button onClick={startTimer} className="startBtn">
          {paused || timerFinished ? 'Start' : 'Stop'}
        </button>
      </div>
    </div>
  )
}

export default TimerCard
