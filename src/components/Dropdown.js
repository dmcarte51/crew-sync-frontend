import React, { useState } from 'react';
import './styles/Dropdown.css';
import './styles/EmpAvail.css';

// Status Dropdown Component
export function StatusDropdown() {
  const [selectedStatus, setSelectedStatus] = useState('Select Status');

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedStatus}</button>
      <div className="dropdown-content">
        <select onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="Open">Open</option>
          <option value="Off">Off</option>
        </select>
      </div>
    </div>
  );
}

// Time Dropdown Component
export function TimeDropdown() {
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
    <div className="dropdown">
      <button className="dropbtn">{selectedTime}</button>
      <div className="dropdown-content">
        <select onChange={(e) => setSelectedTime(e.target.value)}>
          {timeIncrements.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
