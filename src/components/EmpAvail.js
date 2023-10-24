// EmpAvail.js
import { default as React, useState } from 'react';
import { StatusDropdown, TimeDropdown } from './Dropdown.js';
import './styles/EmpAvail.css';


function EmpAvail() {
    const numItems = 32;
    const [isTimeDropdownEnabled, setIsTimeDropdownEnabled] = useState(false);

    const handleStatusChange = (status) => {
      if (status === "Custom") {
        setIsTimeDropdownEnabled(true);
      } else {
        setIsTimeDropdownEnabled(false);
      }
  }
  return (

     <div className="emp-avail">
      {/* <div  style={{ position: 'fixed', left: 350, width: 750, height: 130, background: '#E4E4E4', border: '2px black solid'}} />      Add more content as needed */}
      {/* <h1 className={styles.window}>Employee Availability</h1> */}
       <div class="flex-container">
         <div class="flex-item"></div>
         <div class="flex-item">Monday</div>
         <div class="flex-item">Tuesday</div>
         <div class="flex-item">Wednesday</div>
         <div class="flex-item">Thursday</div>
         <div class="flex-item">Friday</div>
         <div class="flex-item">Saturday</div>
         <div class="flex-item">Sunday</div>
         <div class="flex-item">Availability</div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item"><StatusDropdown onStatusChange={handleStatusChange} /></div>
         <div class="flex-item">Start</div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item">End</div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         <div class="flex-item"><TimeDropdown /></div>
         </div>{/* hard code */}
         
      
      {isTimeDropdownEnabled ? <TimeDropdown /> : <TimeDropdown disabled />}
      
      {/* <h1 className="title">Employee Availability</h1>
      <div className="flex-container">
        <FlexItem count={numItems} />
      </div> */} {/* attempt at recursion */}
    
    </div>

  );
}

// function FlexItem({ count }) {
//     if (count === 0) {
//       return null;
//     }
  
//     return (
//       <div className="flex-item">
//         {/* Text content within the flex item */}
//         <p>Box {count}</p>
//         <FlexItem count={count - 1} />
//       </div>
//     );
//   } w/ recursion

export default EmpAvail;