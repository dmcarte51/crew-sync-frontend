import './styles/Landing.css'
import { useState } from 'react';
import Dashboard from './Dashboard';
import Register from './Register';
import Login from './Login';
 
export default function Form() {
    // sets test user (for development use only), register component will set this to the user that is registered
    const [registeredUsers, setRegisteredUsers] = useState({
        username: '',
        password: '',
        email: ''
      });

    const [verifiedUser, setVerifiedUser] = useState({
        username: '',
        password: '',
        email: '',
        isAuthenticated: false
    });

    // function is passed to register component to set the user 
    const handleRegisterComponentData = (user, isAuthenticated) => {
        setRegisteredUsers(user);
    }

    const handleLoginComponentData = (verifiedUser) => {
        setVerifiedUser(verifiedUser);
    }

    return (
        <div>
        {verifiedUser.isAuthenticated ? (
          // If user is authenticated, display something else (e.g., dashboard)
          <div>
            <h1>Welcome to the Dashboard</h1>
            <Dashboard />
          </div>
        ) : (
          // If user is not authenticated, display login or sign-up
          <div>
            <h1>Welcome to Our App</h1>
            <p>Please log in or sign up to continue.</p>
            <div>
              <Login onDataExport={handleLoginComponentData} registeredUser={registeredUsers} />
              <Register onDataExport={handleRegisterComponentData} />
            </div>
          </div>
        )}
      </div>
    );
}