import React, { useState } from 'react';
import axios from 'axios';
import './styles/Scheduler.css';
import OpenAI from 'openai';

const Scheduler = () => {
  const [response, setResponse] = useState('');
  const apiKey = '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'; // INSERT YOUR API KEY UNTIL WE GET .ENV FILE WORKING

  console.log(response);

  const prompt = `Do not include pleasantries or explanations in your responses. Your responses should only contain a schedule in comma-separated format (one for each id): id,sunday_hours,monday_hours,tuesday_hours,wednesday_hours,thursday_hours,friday_hours,saturday_hours
  Can you generate a schedule based on:
  1. Availability data:
  if it says open then place a shift between 4 and 8 hours long
  if it says off, then don't put a shift there, leave it as off
  2. This range of hours: 08:00 - 20:00
  3. Shifts are a minimum of 4 hours and a maximum of 8
  4. Every time slot must have at least 1 employee object and at most 5
  5. Each object should have at least 2 off days. If 2 off days aren't specified, then place 2 off days randomly for each object.
  Below this is the availability data in CSV format, each id represents an employee, followed by 7 time ranges (shifts) for each day of the week:
  id,sunday_hours,monday_hours,tuesday_hours,wednesday_hours,thursday_hours,friday_hours,saturday_hours
  1,open,16:00-20:00,off,open,open,open,08:00-14:00
  2,14:00-20:00,open,16:00-20:00,08:00-14:00,open,open,open
  3,16:00-20:00,open,open,08:00-14:00,off,08:00-14:00,16:00-20:00
  4,open,14:00-20:00,08:00-14:00,08:00-14:00,off,open,off
  5,open,16:00-20:00,08:00-14:00,open,08:00-14:00,open,08:00-14:00
  6,08:00-14:00,08:00-14:00,open,open,open,16:00-20:00,08:00-14:00
  7,16:00-20:00,08:00-14:00,08:00-14:00,16:00-20:00,08:00-14:00,14:00-20:00,08:00-14:00
  8,08:00-14:00,14:00-20:00,open,16:00-20:00,14:00-20:00,14:00-20:00,open
  9,08:00-14:00,08:00-14:00,open,open,16:00-20:00,14:00-20:00,14:00-20:00
  10,14:00-20:00,open,off,08:00-14:00,14:00-20:00,14:00-20:00,16:00-20:00
  11,16:00-20:00,08:00-14:00,open,16:00-20:00,off,14:00-20:00,08:00-14:00
  12,14:00-20:00,08:00-14:00,14:00-20:00,16:00-20:00,08:00-14:00,14:00-20:00,14:00-20:00
  13,16:00-20:00,off,08:00-14:00,08:00-14:00,08:00-14:00,14:00-20:00,08:00-14:00
  14,off,08:00-14:00,open,08:00-14:00,16:00-20:00,open,08:00-14:00
  15,08:00-14:00,08:00-14:00,16:00-20:00,08:00-14:00,off,16:00-20:00,open`;
  

  const handleAPIRequest = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error('Error making API request', error);
    }
  };

  return (
    <div>
      <button onClick={handleAPIRequest}>Call OpenAI API</button>
      <p>{response}</p>
    </div>
  );
};

export default Scheduler;