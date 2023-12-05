import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Send login request to the backend
    fetch("http://localhost:5000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/home");
          console.log(data.message); // Handle success message from the backend
        } else {
          toast.error(data.message); // Display error message as a pop-up
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="log">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="buttons-row">
            <button type="submit" className="login-btn">
              Login
            </button>
            <Link to="/register" className="login-btn">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
