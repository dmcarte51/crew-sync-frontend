import "./styles/Register.css";
import React, { useState } from 'react';

function RegistrationForm({ onDataExport }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleExportData = (data) => {
        // Call the callback function with the data to send it to App.js
        onDataExport(data);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to server or handle it accordingly
        handleExportData(formData);
        console.log('User data submitted:', formData);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" onSubmit={handleSubmit}>Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
