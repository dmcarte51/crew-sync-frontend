import React from "react";
import EmpWorkWeek from "./EmpWorkWeek";
import "./styles/Calendar.css";

function Calendar( { empData, dates = [] } ) {
  // Create an array of day names for the week
  const daysOfWeek = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="calendar">
      <div className="days">
        {daysOfWeek.map((day, index) => (
          <a key={index} className="day" href={`d3/${day}`} empData={empData} >
            <div className="day-name">{day}</div>
            <div className="day-date">{dates[index]}</div>
            {/* You can add more content for each day here */}
          </a>
        ))}
      </div>
      <EmpWorkWeek empData={empData} />
    </div>
  );
};

export default Calendar;