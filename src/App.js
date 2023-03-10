import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';

const SelectHours = (props) => {
  const hours = [
    { value: 10, label: '8 hours' },
    { value: 9, label: '7.5 hours' },
    { value: 8, label: '7 hours' },
    { value: 7, label: '6.5 hours' },
    { value: 6, label: '6 hours' },
    { value: 5, label: '5.5 hours' },
    { value: 4, label: '5 hours' },
    { value: 3, label: '4.5 hours' },
    { value: 2, label: '4 hours' },
    { value: 1, label: '3.5 hours' },
    { value: 0, label: '3 hours' },
  ];

  const handleChange = (selected) => {
    props.onChange(selected.value);
  };

  return (
    <>
      <p>How many hours did you sleep last night?</p>
      <Select className="select-hours" options={hours} onChange={handleChange}  />
    </>
  )
}

const SelectTime = (props) => {
  const time = [
    { value: 10, label: '22:00' },
    { value: 9, label: '22:20' },
    { value: 8, label: '22:40' },
    { value: 7, label: '23:00' },
    { value: 6, label: '23:20' },
    { value: 5, label: '23:40' },
    { value: 4, label: '00:00' },
    { value: 3, label: '00:20' },
    { value: 2, label: '00:40' },
    { value: 1, label: '01:00' },
    { value: 0, label: '01:20' },
    { value: -1, label: '01:40' },
    { value: -2, label: '02:00' },
    { value: -3, label: '02:20' },
    { value: -4, label: '02:40' },
    { value: -5, label: '03:00' },
  ];

  const handleChange = (selected) => {
    props.onChange(selected.value);
  };

  return (
    <>
      <p>What time did you fall asleep last night?</p>
      <Select className="select-time" options={time} onChange={handleChange} />
    </>
  )
}

const SleepScore = (props) => {
  return (
    <>
      <p>Your sleep score:</p>
      <h1>{props.score}</h1>
    </>
  )
}

function App() {
  const [score, setScore] = useState(10);
  const [hoursScore, setHoursScore] = useState(10);
  const [timeScore, setTimeScore] = useState(10);

  const updateScore = () => {
    const score = (timeScore + hoursScore) / 2;
    setScore(score);
  }

  return (
    <div className="App">
      <SleepScore score={score} />
      <SelectHours onChange={setHoursScore} />
      <SelectTime onChange={setTimeScore} />
      <button onClick={updateScore}>
        Calculate
      </button>
    </div>
  );
}

export default App;
