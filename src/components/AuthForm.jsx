import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;

  & a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const AuthForm = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if (isSignUp) {
      console.log('Email:', email);
      console.log('Confirm Password:', confirmPassword);
    }

    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');

    onLogin();
    navigate('/home');
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <FormContainer>
        <Title>{isSignUp ? 'Sign Up for a New Account' : 'Sign In to Your Account'}</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="auth-username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <Input
            type="password"
            id="auth-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {isSignUp && (
            <>
              <Input
                type="email"
                id="auth-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <Input
                type="password"
                id="auth-confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </>
          )}
          <Button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
        </Form>
        <SwitchText>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <a href="#" onClick={toggleForm}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </a>
        </SwitchText>
      </FormContainer>
    </Container>
  );
};

export default AuthForm;