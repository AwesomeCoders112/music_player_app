import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import Search from './components/Search/Search';


import Playlist from './components/Library/Playlists';
import Playlist1 from './components/Playlist/Playlist1';
import Playlist2 from './components/Playlist/Playlist2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AuthForm from './components/AuthForm/AuthForm';
import Songs from './components/Song/Music';
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
            <Sidebar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path='/Songs' element={<Songs />}/>
              <Route path="/Playlists" element={<Playlist />} />
              <Route path="/Playlist1" element={<Playlist1 />} />
              <Route path="/Playlist2" element={<Playlist2 />} />
            </Routes>
            <Footer/>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;