import React, { Component } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import './styles/EmpAvail.css';

class EmpAvail extends Component {
  state = {
    schedule: [],
    dayAvailabilities: {
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      Saturday: '',
      Sunday: '',
    },
  };

  // Define dayLabels as a class property
  dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule }, this.generateOutput);
  };

  generateOutput = () => {
    const { schedule, dayAvailabilities } = this.state;

    this.dayLabels.forEach((day) => {
      const dayIndex = this.dayLabels.indexOf(day);
      const selectedDaySchedule = schedule.slice(dayIndex * 24, (dayIndex + 1) * 24);
      const selectedTimeSlots = [];

      for (let i = 0; i < 24; i++) {
        if (selectedDaySchedule[i]) {
          selectedTimeSlots.push(i);
        }
      }

      if (selectedTimeSlots.length > 0) {
        const startTime = selectedTimeSlots[0] + 8; // Adjust for your specific time range
        const endTime = selectedTimeSlots[selectedTimeSlots.length - 1] + 9; // Adjust for your specific time range

        dayAvailabilities[day] = `${day}: ${startTime}:00 - ${endTime}:00`;
      } else {
        dayAvailabilities[day] = `${day}: No availability`;
      }
    });

    this.setState({ dayAvailabilities });
  };

  sendToDatabase = () => {
    const { dayAvailabilities } = this.state;

    // Send 'dayAvailabilities' to your database using an API or another method.
    // Example using fetch:
    fetch('your-database-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ availability: dayAvailabilities }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="emp-avail">
        <div className="flex-container">
          <div className="flex-item">
            <div className="scheduler-container">
              <ScheduleSelector
                selection={this.state.schedule}
                onChange={this.handleChange}
                minTime={8}
                maxTime={21}
                timeFormat={"HH:mm"}
                dateFormat={"ddd"}
                startDate={"9-14-20"}
                margin={1}
                days={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
              />
            </div>
          </div>
          <div className="output-container">
            <h3>Day Availabilities:</h3>
            {Object.keys(this.state.dayAvailabilities).map(day => (
              <pre key={day}>{this.state.dayAvailabilities[day]}</pre>
            ))}
            <button onClick={this.sendToDatabase}>Send to Database</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmpAvail;
