import React from 'react';
import back from '../back.jpg';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <img src={back} alt='logo' style={{ maxWidth: '100%', height: '85vh', backgroundBlendMode: 'multiply' }} />
      <div className='mycls' style={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'yellow' }}>
        <h1 style={{ fontSize: '2.5em' }}>Welcome to Music Player</h1>
        <br></br>
        <ul style={{ listStyleType: 'none', padding: 0 }}></ul>
      </div>
    </div>
  );
};

export default Home;