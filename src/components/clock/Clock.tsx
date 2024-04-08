import React, { useEffect, useState } from 'react';
import classes from "./clock.module.css"

type ClockPropType = {}

export function Clock(props: ClockPropType) {
  const [isDigitClock, setIsDigitClock] = useState(true)
  const [date, setDate] = useState(new Date());

  const formatTime = (number: number) => {
    return number < 10 ? "0" + number : number
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      console.log("tick");
      setDate(new Date());
    }, 1000)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])

  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  return (
    <div className={classes.clockWrapper}>
      {isDigitClock ? (
        <div className={classes.digitClock}>
          <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
        </div>
      ) : (
        <div className={classes.analogClock}>
          <div
            className={classes.hour_hand}
            style={{
              transform: `rotateZ(${Number(hours) * 30}deg)`
            }}
          />
          <div
            className={classes.min_hand}
            style={{
              transform: `rotateZ(${Number(minutes) * 6}deg)`
            }}
          />
          <div
            className={classes.sec_hand}
            style={{
              transform: `rotateZ(${Number(seconds) * 6}deg)`
            }}
          />
          <span className={classes.twelve}>12</span>
          <span className={classes.one}>1</span>
          <span className={classes.two}>2</span>
          <span className={classes.three}>3</span>
          <span className={classes.four}>4</span>
          <span className={classes.five}>5</span>
          <span className={classes.six}>6</span>
          <span className={classes.seven}>7</span>
          <span className={classes.eight}>8</span>
          <span className={classes.nine}>9</span>
          <span className={classes.ten}>10</span>
          <span className={classes.eleven}>11</span>
        </div>
      )}
      <button onClick={() => { setIsDigitClock(!isDigitClock) }}>
        {isDigitClock === true ? "switch to analog view" : "switch to digital view"}
      </button>
    </div>
  )
}