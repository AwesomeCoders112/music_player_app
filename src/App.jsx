import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Search from './components/Search';
import back from './Back.jpg'
import PlayerControls from './components/Control';

function App() {
 return (
    <Router>
      <div className="App">
        <Sidebar />
        <PlayerControls/>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <img src={back} alt='logo' style={{ maxWidth: '100%', height: '0%', backgroundBlendMode: 'multiply' }} />
              <div className='mycls' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'yellow' }}>
                <h1 style={{ fontSize: '4.5em'}}>Welcome to Music Player</h1>
                <h1 style={{ fontSize: '2.5em'}}>Your one stop Destination to all music</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                </ul>
              </div>
            </div>
          } />
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;