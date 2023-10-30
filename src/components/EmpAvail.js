import React, { useState } from 'react';

function AvailabilityInput() {
  const [availability, setAvailability] = useState({
    Monday: new Array(13).fill(false),
    Tuesday: new Array(13).fill(false),
    Wednesday: new Array(13).fill(false),
    Thursday: new Array(13).fill(false),
    Friday: new Array(13).fill(false),
    Saturday: new Array(13).fill(false),
    Sunday: new Array(13).fill(false),
  });

  const handleCheckboxChange = (day, hourIndex) => {
    const newAvailability = { ...availability };
    newAvailability[day][hourIndex] = !newAvailability[day][hourIndex];
    setAvailability(newAvailability);
  };

  const formatTime = (start, end) => {
    return `${start}:00 - ${end + 1}:00`;
  };

  const saveDataToCSV = () => {
    // Create an array to store availability data for each day.
    const availabilityCSV = [];
  
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    daysOfWeek.forEach((day) => {
      const dayAvailability = availability[day];
      let start = null;
      let end = null;
  
      for (let i = 0; i < dayAvailability.length; i++) {
        if (dayAvailability[i]) {
          if (start === null) {
            start = i;
          }
          end = i;
        } else if (start !== null) {
          availabilityCSV.push(`${formatTime(start + 8, end + 8)}-${formatTime(end + 8, end + 9)}`);
          break; // Break after adding one range for the day.
        }
      }
  
      // If no availability for the day, add "off".
      if (start === null) {
        availabilityCSV.push("off");
      }
    });
  
    // Log the CSV data for demonstration purposes.
    console.log('CSV Data:', availabilityCSV);
  };
  
  

  return (
    <div>
      <h2>Availability</h2>
      <div className="availability-input">
        {Object.keys(availability).map((day) => (
          <div key={day}>
            <p>{day}:</p>
            <div className="checkbox-container">
              {availability[day].map((isChecked, index) => (
                <label key={index} className={isChecked ? 'checked' : ''}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(day, index)}
                  />
                  {`${8 + index}:00`}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="availability-display">
        <h3>Availability Display:</h3>
        {Object.keys(availability).map((day) => (
          <p key={day}>
            {day}:
            {availability[day].reduce(
              (acc, isChecked, index) => {
                if (isChecked) {
                  if (acc.start === null) {
                    acc.start = 8 + index;
                    acc.end = 8 + index;
                  } else {
                    acc.end = 8 + index;
                  }
                }
                return acc;
              },
              { start: null, end: null }
            ).start !== null
              ? formatTime(
                  availability[day].reduce(
                    (acc, isChecked, index) => {
                      if (isChecked) {
                        if (acc.start === null) {
                          acc.start = 8 + index;
                          acc.end = 8 + index;
                        } else {
                          acc.end = 8 + index;
                        }
                      }
                      return acc;
                    },
                    { start: null, end: null }
                  ).start,
                  availability[day].reduce(
                    (acc, isChecked, index) => {
                      if (isChecked) {
                        if (acc.start === null) {
                          acc.start = 8 + index;
                          acc.end = 8 + index;
                        } else {
                          acc.end = 8 + index;
                        }
                      }
                      return acc;
                    },
                    { start: null, end: null }
                  ).end
                )
              : 'No availability selected'
            }
          </p>
        ))}
      </div>
      <button onClick={saveDataToCSV}>Save Availability</button>
    </div>
  );
}

export default AvailabilityInput;
