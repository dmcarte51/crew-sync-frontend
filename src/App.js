import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import D3Test from './components/D3Test';
import background from './CrewSync.svg';
import Calendar from './components/Calendar';
import D3Emp from './components/D3Emp';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  // Your employee data
  const empData =  [
    { name: 'David', emp_id: 5, startTimes: ['08:00', '10:00', '12:00', '08:00', '10:00', '10:00', '10:00'], endTimes: ['16:00', '14:00', '18:00', '14:00', '16:00', '16:00', '14:00'] },
    { name: 'John', emp_id: 6, startTimes: ['10:00', '08:00', '10:00', '10:00', '08:00', '10:00', '08:00'], endTimes: ['14:00', '16:00', '16:00', '14:00', '14:00', '16:00', '16:00'] },
    { name: 'Paul', emp_id: 7, startTimes: ['10:00', '08:00', '08:00', '10:00', '10:00', '08:00', '10:00'], endTimes: ['16:00', '16:00', '14:00', '14:00', '16:00', '14:00', '16:00'] },
    { name: 'George', emp_id: 8, startTimes: ['12:00', '08:00', '08:00', '12:00', '10:00', '12:00', '10:00'], endTimes: ['18:00', '14:00', '14:00', '18:00', '14:00', '18:00', '14:00'] },
    { name: 'Ringo', emp_id: 9, startTimes: ['10:00', '08:00', '12:00', '08:00', '10:00', '08:00', '10:00'], endTimes: ['14:00', '16:00', '18:00', '14:00', '16:00', '14:00', '16:00'] },
    { name: 'Mick', emp_id: 10, startTimes: ['08:00', '10:00', '08:00', '12:00', '08:00', '10:00', '12:00'], endTimes: ['16:00', '14:00', '16:00', '18:00', '14:00', '16:00', '18:00'] },
    { name: 'Keith', emp_id: 11, startTimes: ['08:00', '12:00', '10:00', '08:00', '10:00', '10:00', '08:00'], endTimes: ['16:00', '18:00', '14:00', '16:00', '14:00', '14:00', '10:00'] },
    { name: 'Charlie', emp_id: 12, startTimes: ['08:00', '08:00', '12:00', '10:00', '08:00', '12:00', '10:00'], endTimes: ['16:00', '14:00', '18:00', '14:00', '16:00', '18:00', '14:00'] },
    { name: 'Ronnie', emp_id: 13, startTimes: ['08:00', '10:00', '10:00', '08:00', '12:00', '10:00', '08:00'], endTimes: ['16:00', '14:00', '16:00', '14:00', '18:00', '14:00', '10:00'] }
  ];

  function findByName(name) {
    return empData.find(employee => employee.name === name);
  }

  const dates = ['', '10/2/2023', '10/3/2023', '10/4/2023', '10/5/2023', '10/6/2023', '10/7/2023', '10/8/2023']
  // RANDOM WHITESPACE AT INDEX 1 IS NECESSARY
  // FOR THE CALENDAR TO DISPLAY CORRECTLY

  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
          <Route
            path="/"
            element={
              <Layout> {/* Wrap the content of each route with the Layout component */}
                <Landing />
              </Layout>
            }
          />
            <Route
            path="/reg"
            element={
              <Layout> {/* Wrap the content of each route with the Layout component */}
                <Register />s
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/cal"
            element={
              <Layout>
                <Calendar empData={empData} dates={dates} />
              </Layout>
            }
          />
          {dayOfWeek.map((day, index) => (
            <Route key={index} path={`d3/${day}`} element={<D3Test empData={empData} index={index} />} />
          ))}
          {empData.map((employee) => (
            <Route key={employee.name} path={`d3/${employee.name}`} element={<D3Emp empData={findByName(employee.name)} />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
