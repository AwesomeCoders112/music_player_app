import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import unnamed from './unnamed.png';
import './Sidebar.css';
import { FaHome, FaSearch, FaListUl, FaRegHeart } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={unnamed} alt="Logo" className="sidebar-logo" />
      <div className="sidebar-list-container">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/home"style={{ color: 'white', textDecoration: 'none' }}> <FaHome/> Home</Link></li>
          <br></br>
          <li><Link to="/search" style={{ color: 'white', textDecoration: 'none' }}><FaSearch /> Search</Link></li>
          <br></br>
          <li><Link to="/playlists" style={{ color: 'white', textDecoration: 'none' }}><FaListUl /> Playlists</Link></li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <h3 style={{marginLeft: 10}} > Your Favourite Playlist </h3>
          <li><Link to="/playlist1" style={{ color: 'white', textDecoration: 'none' }}><FaRegHeart /> Playlist 1</Link></li>
          <li><Link to="/playlist2" style={{ color: 'white', textDecoration: 'none' }}><FaRegHeart /> Playlist 2</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;