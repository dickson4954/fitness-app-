import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in

  const handleLogin = () => {
    // Simulate login action without storing token
    if (username === 'admin' && password === 'password') {
      // Simulated successful login
      setLoggedIn(true); // Set loggedIn state to true
    } else {
      // Simulated unsuccessful login
      alert('Invalid username or password');
    }
  };

  const handleSignup = () => {
    // Simulate signup action without storing token
    // Here you would normally send a POST request to your backend to create a new user
    alert(`Signup functionality is not implemented in this demo.`);
  };

  const handleLogout = () => {
    // Simulate logout action
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    // If logged in, show a logout button and redirect user to home page
    return (
      <div className="text-center">
        <Navbar />
        <h2>Welcome, {username}!</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        <Link to="/home" />
      </div>
    );
  }

  return (
    <div className="text-center">
      <Navbar />
      <h2>Login or Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <button className="btn btn-primary me-2" onClick={handleLogin}>Login</button>
          <button className="btn btn-success" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
