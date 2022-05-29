import React, { useState } from "react";
import TimeInput from "./TimeInput";

import './TimeApp.css'

const TimeApp = () => {
  const [time, setTime] = useState({
    seconds: '',
    minutes: '',
    hours: ''
  });

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    switch(inputName) {
      case 'seconds':
        setTime({
          seconds: inputValue,
          minutes: (inputValue / 60),
          hours: (inputValue / 3600)
        })
        break;
      case 'minutes':
        setTime({
          seconds: ( inputValue * 60),
          minutes: inputValue,
          hours: (inputValue / 60)
        })
        break;

      case 'hours': 
      setTime({
        seconds: ( inputValue * 3600),
        minutes: (inputValue * 60),
        hours: inputValue
      })
      break;
    }
  }

  return (
    <div className="inputs-time">
      <TimeInput name="seconds" inputValue={time.seconds} handleChange={handleChange} />
      <TimeInput name="minutes" inputValue={time.minutes} handleChange={handleChange} />
      <TimeInput name="hours" inputValue={time.hours} handleChange={handleChange} />
    </div>
  )

}

export default TimeApp;


