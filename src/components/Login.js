import './styles/Login.css'
import { useState } from 'react';


function LoginComponent({ onDataExport, registeredUsers }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleLogin = () => {
      const user = authenticateUser(username, password);
  
      if (user.username === registeredUsers.username && user.password === registeredUsers.password) {
        onDataExport();
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
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
      </div>
    );
  }
  
  export default LoginComponent;