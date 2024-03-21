import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication or sign-up logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if (isSignUp) {
      console.log('Email:', email);
      console.log('Confirm Password:', confirmPassword);
    }
    // Clear the form inputs
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div id="form-container">
        <h1>{isSignUp ? 'Sign Up for a New Account' : 'Sign In to Your Account'}</h1>
        <form id="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="auth-username">Username:</label>
          <input
            type="text"
            id="auth-username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="auth-password">Password:</label>
          <input
            type="password"
            id="auth-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignUp && (
            <>
              <label htmlFor="auth-email">Email:</label>
              <input
                type="email"
                id="auth-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="auth-confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="auth-confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}
          <button id="auth-button" type="submit">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <p id="switch-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <a href="#" onClick={toggleForm}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;