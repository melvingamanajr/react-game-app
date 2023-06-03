import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send registration data to the server
    axios
      .post('http://localhost:8800/api/signup', { username, password })
      .then((response) => {
        console.log('Registered successfully');

        setToken(response.data.token);
        window.location = '/';
      })
      .catch((error) => {
        console.error(error);
        setError('Error occurred during registration.');
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #336699', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ color: '#336699', textAlign: 'center' }}>SIGNUP</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{ marginBottom: '10px' }}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ marginBottom: '10px' }}
          />
          {token && <p>Authentication token: {token}</p>}
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#336699', color: '#FFFFFF', marginRight: '10px' }}>
              SIGN UP
            </button>
            <Link to="/login" style={{ color: '#336699', textDecoration: 'none' }}>
              BACK
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
