import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import unnamed from './unnamed.png';
import './Sidebar.css';

const Sidebar = () => {
 return (
    <div className="sidebar">
      <img src={unnamed} alt="Logo" className="sidebar-logo" />
      <div className="sidebar-list-container">
        <ul>
        <li><Link to="/">Return to Music Player</Link></li>
          <li><Link to="Home.jsx/">Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="Search.jsx/">Search</Link></li>
          <li><Link to="Your_libraries/">Your Libraries</Link></li>
          <li><Link to="Playlists.jsx/">Playlists</Link></li>
        </ul>
        <ul>
          <li><Link to="Playlist1.jsx/">Playlist 1</Link></li>
          <li><Link to="Playlist2.jsx/">Playlist 2</Link></li>
          <li><Link to="Playlist3.jsx/">Playlist 3</Link></li>
        </ul>
      </div>
    </div>
 );
};

export default Sidebar;