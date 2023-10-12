import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import D3Test from './components/D3Test';
import background from './CrewSync.svg';
import Calendar from './components/Calendar';
import React, { useEffect } from 'react';

function App() {
  // Your employee data
  const empData =  [
    { name: 'David', startTimes: ['8:00', '10:00', '12:00', '8:00', '10:00', 'Off', '10:00'], endTimes: ['16:00', '14:00', '18:00', '14:00', '16:00', 'Off', '14:00'] },
    { name: 'John', startTimes: ['10:00', '8:00', '10:00', '10:00', '8:00', '10:00', 'Off'], endTimes: ['14:00', '16:00', '16:00', '14:00', '14:00', '16:00', 'Off'] },
    { name: 'Paul', startTimes: ['10:00', '8:00', '8:00', '10:00', '10:00', '8:00', '10:00'], endTimes: ['16:00', '16:00', '14:00', '14:00', '16:00', '14:00', '16:00'] },
    { name: 'George', startTimes: ['12:00', '8:00', '8:00', '12:00', '10:00', '12:00', '10:00'], endTimes: ['18:00', '14:00', '14:00', '18:00', '14:00', '18:00', '14:00'] },
    { name: 'Ringo', startTimes: ['10:00', '8:00', '12:00', '8:00', '10:00', '8:00', '10:00'], endTimes: ['14:00', '16:00', '18:00', '14:00', '16:00', '14:00', '16:00'] },
    { name: 'Mick', startTimes: ['8:00', '10:00', '8:00', '12:00', '8:00', '10:00', '12:00'], endTimes: ['16:00', '14:00', '16:00', '18:00', '14:00', '16:00', '18:00'] },
    { name: 'Keith', startTimes: ['8:00', '12:00', '10:00', '8:00', '10:00', '10:00', '8:00'], endTimes: ['16:00', '18:00', '14:00', '16:00', '14:00', '14:00', '10:00'] },
    { name: 'Charlie', startTimes: ['8:00', '8:00', '12:00', '10:00', '8:00', '12:00', '10:00'], endTimes: ['16:00', '14:00', '18:00', '14:00', '16:00', '18:00', '14:00'] },
    { name: 'Ronnie', startTimes: ['8:00', '10:00', '10:00', '8:00', '12:00', '10:00', '8:00'], endTimes: ['16:00', '14:00', '16:00', '14:00', '18:00', '14:00', '10:00'] }
  ];

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Calendar empData={empData} />} />
          <Route path="/d3" element={<D3Test empData={empData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;