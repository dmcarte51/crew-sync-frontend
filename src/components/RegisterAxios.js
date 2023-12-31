import axios from 'axios';
import React, { useState } from 'react';

const RegisterAxios = () => {
    // State variables for the input fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Construct the data object
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            // Send POST request to Django backend
            const response = await axios.post('http://localhost:8000/user/create/', userData);
            console.log('Registration successful!', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterAxios;