import React, { useState } from 'react';
import './styles/Dropdown.css';
import './styles/EmpAvail.css';

// Status Dropdown Component
export function StatusDropdown({ onStatusChange }) {
  const [selectedStatus, setSelectedStatus] = useState('Select Status');

  const handleChange = (e) => {
    setSelectedStatus(e.target.value);
    onStatusChange(e.target.value);  // This is where the callback is used
}

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedStatus}</button>
      <div className="dropdown-content">
        <select onChange={handleChange}>
          <option value="Open">Open</option>
          <option value="Off">Off</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
    </div>
  );
}


// Time Dropdown Component
export function TimeDropdown({ disabled }) {
  const [selectedTime, setSelectedTime] = useState('Select Time');
  const timeIncrements = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hours = i.toString().padStart(2, '0');
      const minutes = j.toString().padStart(2, '0');
      timeIncrements.push(`${hours}:${minutes}`);
    }
  }

  return (
    <div className={`dropdown ${disabled ? 'disabled' : ''}`}>
      <button className="dropbtn">{selectedTime}</button>
      <div className="dropdown-content">
        <select onChange={(e) => setSelectedTime(e.target.value)} disabled={disabled}>
          {timeIncrements.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

