import React, { useState } from 'react';
import './login.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const Login = ({ setIsLoggedIn }) => {
  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // CRUD state
  const [attempts, setAttempts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editUsername, setEditUsername] = useState('');

  // Credentials
  const validUsername = 'admin';
  const validPassword = 'password';

  // Handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const status =
      username === validUsername && password === validPassword
        ? 'Success'
        : 'Failed';
    // Add attempt to list
    setAttempts([
      ...attempts,
      {
        id: Date.now(),
        username,
        status,
        completed: status === 'Success',
      },
    ]);
    // If successful, log in
    if (status === 'Success') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
    // Clear input
    setUsername('');
    setPassword('');
  };

  // Edit attempt
  const handleEdit = (id, username) => {
    setEditId(id);
    setEditUsername(username);
  };
  const handleEditSave = (id) => {
    setAttempts(
      attempts.map((a) =>
        a.id === id ? { ...a, username: editUsername } : a
      )
    );
    setEditId(null);
    setEditUsername('');
  };

  // Delete attempt
  const handleDelete = (id) => {
    setAttempts(attempts.filter((a) => a.id !== id));
  };

  // Mark as complete (for demonstration)
  const handleComplete = (id) => {
    setAttempts(
      attempts.map((a) =>
        a.id === id ? { ...a, completed: !a.completed } : a
      )
    );
  };

  return (
    <div className="login">
      <div className="headline">
        Welcome<br /><span>To Streamlist</span>
      </div>
      <div className="cubes">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="typewriterContainer">
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="typewriterBase">
          <div className="keys">
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
        </div>
      </div>
      {/* CRUD List of Login Attempts */}
      <div className="login-attempts">
        <h3>Login Attempts</h3>
        <ul>
          {attempts.map((a) => (
            <li
              key={a.id}
              style={{
                textDecoration: a.completed ? 'line-through' : 'none',
                color: a.completed ? '#1DBAB4' : a.status === 'Failed' ? '#FC5226' : '#fff',
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
              }}
            >
              {editId === a.id ? (
                <>
                  <input
                    value={editUsername}
                    onChange={e => setEditUsername(e.target.value)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  <button onClick={() => handleEditSave(a.id)} title="Save">
                    <FaCheck />
                  </button>
                </>
              ) : (
                <>
                  <span>
                    <strong>{a.username}</strong> ({a.status})
                  </span>
                  <button onClick={() => handleEdit(a.id, a.username)} title="Edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(a.id)} title="Delete">
                    <FaTrash />
                  </button>
                  <button onClick={() => handleComplete(a.id)} title="Toggle Complete">
                    <FaCheck />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Login;
