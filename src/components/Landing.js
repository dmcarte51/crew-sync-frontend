import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import './styles/Landing.css';

function Landing() {
    // sets test user (for development use only), register component will set this to the user that is registered


    const [verifiedUser, setVerifiedUser] = useState({
        username: '',
        password: '',
        email: '',
        isAuthenticated: false
    });

    // function is passed to register component to set the user 

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
              <Login onDataExport={handleLoginComponentData} />
              <Register />
            </div>
          </div>
        )}
      </div>
    );
}

export default Landing;