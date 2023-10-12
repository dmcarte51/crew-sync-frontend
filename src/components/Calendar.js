import "./Calendar.css";
import EmpWorkWeek from "./EmpWorkWeek";

function Calendar( { empData } ) {
  // Create an array of day names for the week
  const daysOfWeek = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dates = ['','10/2/2023', '10/2/2023', '10/2/2023', '10/2/2023', '10/2/2023', '10/2/2023', '10/2/2023']

  return (
    <div className="calendar">
      <div className="days">
        {daysOfWeek.map((day, index) => (
          <a key={index} className="day" href="/d3">
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