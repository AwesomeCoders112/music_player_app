import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import unnamed from './unnamed.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={unnamed} alt="Logo" className="sidebar-logo" />
      <div className="sidebar-list-container">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <h3 style={{marginLeft: 10}}> Browse </h3>
          <li><Link to="/"style={{ color: 'white', textDecoration: 'none' }}>Return to Music Player</Link></li>
          <li><Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</Link></li>
          <li><Link to="/your_libraries" style={{ color: 'white', textDecoration: 'none' }}>Your Libraries</Link></li>
          <li><Link to="/playlists" style={{ color: 'white', textDecoration: 'none' }}>Playlists</Link></li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <h3 style={{marginLeft: 10}} > Your Favourite Playlist </h3>
          <li><Link to="/playlist1" style={{ color: 'white', textDecoration: 'none' }}>Playlist 1</Link></li>
          <li><Link to="/playlist2" style={{ color: 'white', textDecoration: 'none' }}>Playlist 2</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;