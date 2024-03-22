import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import PlayerControls from './components/Control';
import Playlist from './components/Playlists';
import Playlist1 from './components/Playlist1';
import Playlist2 from './components/Playlist2';
import Header from './components/Header';
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use the Home component */}
          <Route path="/search" element={<Search />} />
          <Route path="/Playlists" element={<Playlist />} />
          <Route path="/Playlist1" element={<Playlist1 />} />
          <Route path="/Playlist2" element={<Playlist2 />} />
        </Routes>
        <PlayerControls />
      </div>
    </Router>
  );
}

export default App;