import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
import { MDBFooter } from 'mdb-react-ui-kit';
import { GoogleLogin } from '@react-oauth/google';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url('https://png.pngtree.com/background/20230617/original/pngtree-spotify-with-empty-space-a-3d-rendering-picture-image_3699554.jpg');
background-size: cover;
background-position: center;
color: #ffffff;
font-family: Arial, sans-serif;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const WelcomeText = styled.h1`
  text-align: center;
  color: yellow;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
background-color: rgba(255, 255, 255, 0.9);
padding: 2rem;
border-radius: 8px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased box shadow for depth */
width: 400px;
max-width: 90%; /* Ensure responsiveness by setting a maximum width */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
backdrop-filter: blur(8px); /* Apply backdrop filter for a frosted glass effect */
background-image: url('https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg');
background-size: cover;
background-position: center;
position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: yellow;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  color: #333333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #45a049;
  }
`;

const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: yellow;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  & a {
    color: yellow;
    text-decoration: none;
    font-weight: bold;
    transition: text-decoration 0.3s ease;

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
  const responseMessage = (response) => {
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');

    onLogin();
    navigate('/home');
};
const errorMessage = (error) => {
    console.log(error);
};

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
    alert("Successfully Signed in");
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
      <WelcomeContainer>
        <Logo src={logo} alt="Music App Logo" />
        <WelcomeText> musicX app!</WelcomeText>
      </WelcomeContainer>
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
        <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </FormContainer>
      <MDBFooter bgColor='dark' className='text-center text-lg-left' style={{ height: '100px' }}>
  <div className='text-center p-3' style={{ backgroundColor: 'green',fontSize: '1.3rem',padding: '5px',width: '29.4vw' }}>
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <a className='text-light' href='https://nmamit.nitte.edu.in/'>
      TeamAwesome Coders
    </a>
  </div>
</MDBFooter>
    </Container>
  );
};

export default AuthForm;