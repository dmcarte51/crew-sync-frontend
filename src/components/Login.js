import './styles/Login.css'
import React, { useState } from 'react';

function Login({ onDataExport, registeredUser }) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!registeredUser) {
      setError('No registered user found');
      return; // Exit the function to prevent further execution
    }
  
    if (user.username === registeredUser.username && user.password === registeredUser.password) {
      onDataExport(registeredUser, true);
      // Handle successful login (e.g., set a session token, navigate to the authenticated part of your app)
    } else {
      setError('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;