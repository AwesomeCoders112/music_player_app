import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
<<<<<<< HEAD
import back from './Back.jpg'
=======
>>>>>>> 733ae53df49b0be979787e00e9285112e8edafd7
import PlayerControls from './components/Control';
import Playlist from './components/Playlists';
import Playlist1 from './components/Playlist1';
import Playlist2 from './components/Playlist2';
import Header from './components/Header';
import Home from './components/Home';
import AuthForm from './components/AuthForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <AuthForm onLogin={handleLogin} />
        ) : (
          <>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/Playlists" element={<Playlist />} />
              <Route path="/Playlist1" element={<Playlist1 />} />
              <Route path="/Playlist2" element={<Playlist2 />} />
            </Routes>
            <PlayerControls />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;