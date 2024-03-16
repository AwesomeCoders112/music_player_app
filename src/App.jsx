import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/Home';
import SearchPage from './components/Search';
import back from './Back.jpg'

function App() {
 return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <img src={back} alt='logo' style={{ maxWidth: '100%', height: '0%', backgroundBlendMode: 'multiply' }} />
              <div className='mycls' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'yellow' }}>
                <h1 style={{ fontSize: '4.5em' }}>Welcome to Music Player</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                </ul>
              </div>
            </div>
          } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;