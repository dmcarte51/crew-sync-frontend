import './styles/Login.css'
import React, { useState } from 'react';

function Login({ onDataExport }) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleLogin = () => {

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