import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HorizontalLine from '../assets/components/HorizontalLine';
import toast from 'react-hot-toast'; // assuming you're using react-hot-toast

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData,
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Logged in");
        toast.success(data.message || "Logged in!");
        navigate("/");
      } else {
        // Backend sends 401 with JSON error
        setMessage(data.detail || "Invalid credentials");
        toast.error(data.detail || "Invalid username or password");
      }

    } catch (error) {
      setMessage("Something went wrong");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <HorizontalLine />
      <div className='w-full px-10 lg:px-16 flex flex-col items-center gap-4 justify-between my-20'>
        <h2 className='header-text text-2xl'>Login</h2>
        <form onSubmit={handleSubmit} className='w-full max-w-[350px]'>
          <div style={{ marginBottom: '1rem' }}>
            <label>Username</label><br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '25px',
                border: '1px solid #ccc',
                outline: 'none'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Password</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '25px',
                border: '1px solid #ccc',
                outline: 'none'
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between pt-4">
            <button className='min-w-[150px]'
              type="submit"
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '0.6rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
            <Link to="/register"
              style={{
                backgroundColor: '#f0f0f0',
                color: 'black',
                padding: '0.6rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Create account
            </Link>
          </div>
        </form>
        {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
      </div>
    </>
  );
};

export default Login;