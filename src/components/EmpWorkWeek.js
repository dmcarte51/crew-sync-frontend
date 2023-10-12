import React from 'react';
import './EmpWorkWeek.css';

function EmpWorkWeek( { empData } ) {
  // 10 employee objects

  if (!empData || !Array.isArray(empData) || empData.length === 0) {
    return <div>No employee data available.</div>;
  }
  return (
    <div className="EmpWorkWeek">
      {empData.map((employee, empIndex) => (
        <div key={empIndex} className="container">
          <a className="empName" href={`/d3/${employee.name}`}>{employee.name}</a>
          <div className="times">
            {employee.startTimes.map((start, index) => (
              <div key={index} className="from">
              {start !== 'Off' && employee.endTimes[index] !== 'Off' ? (
                <div className="time-to-from">{start} - {employee.endTimes[index]}</div>
              ) : (
                <div className="time-to-from">OFF</div>
              )}
                {/* You can add more content for each day here */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmpWorkWeek;