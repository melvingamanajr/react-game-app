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
      <div style={{ width: '300px', padding: '20px', border: '1px solid black' }}>
        <h2>SIGNUP</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
          style={{ margin: '5px' }}
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
          style={{ margin: '5px' }}
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {token && <p>Authentication token: {token}</p>}
          {error && <p>{error}</p>}
          <div className="btn-group">
            <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#239023', margin: '5px' }}>
              SIGN UP
            </button>
            <button className="btn btn-primary" style={{ backgroundColor: '#239023', marginLeft: '10px', margin: '5px' }}>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', arginTop: '10px', padding: '5px'}}>
                BACK
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
