import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import back from './Back.jpg'
import PlayerControls from './components/Control';
import Playlist from './components/Playlists';
import Playlist1 from './components/Playlist1';
import Playlist2 from './components/Playlist2';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
              <img src={back} alt='logo' style={{ maxWidth: '100%', height: '94vh', backgroundBlendMode: 'multiply' }} />

              <div className='mycls' style={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'yellow' }}>
                <h1 style={{ fontSize: '2.5em' }}>Welcome to Music Player</h1>
                <br></br>
                <ul style={{ listStyleType: 'none', padding: 0 }}></ul>
              </div>
            </div>
          } />
          <Route path="/search" element={<Search />} />
          <Route path="/Playlists" element={<Playlist/>}/>
          <Route path="/Playlist1" element={<Playlist1/>}/>
          <Route path="/Playlist2" element={<Playlist2/>}/>
        </Routes>
        <PlayerControls />
      </div>
    </Router>
  );
}

export default App;