import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      const data = await response.json();
      setMessage("Registration successful!");
      window.location.href = '/login'; // Redirect to login after registration
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className='w-full px-10 lg:px-16 flex flex-col items-center gap-4 justify-between my-20'>
      <h2 className='header-text text-2xl'>Create account</h2>
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
        <div className="w-full flex flex-row items-center justify-center pt-4">
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
            Create
          </button>
        </div>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default Register;