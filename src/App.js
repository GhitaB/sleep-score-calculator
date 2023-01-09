import logo from './logo.svg';
import './App.css';
import React from 'react'
import Select from 'react-select'

const hours = [
  { value: 8, label: '8 hours' },
  { value: 7.5, label: '7.5 hours' },
  { value: 7, label: '7 hours' },
  { value: 6.5, label: '6.5 hours' },
  { value: 6, label: '6 hours' },
  { value: 5.5, label: '5.5 hours' },
  { value: 5, label: '5 hours' },
  { value: 4.5, label: '4.5 hours' },
  { value: 4, label: '4 hours' },
  { value: 3.5, label: '3.5 hours' },
  { value: 3, label: '3 hours' },
]

const SelectHours = () => (
  <Select options={hours} />
)

function App() {
  return (
    <div className="App">
      <h1>10</h1>
      <SelectHours />
    </div>
  );
}

export default App;
