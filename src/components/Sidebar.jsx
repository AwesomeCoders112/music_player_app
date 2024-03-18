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
          <li><Link to="/">Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="/">Search</Link></li>
          <li><Link to="/">Your Libraries</Link></li>
          <li><Link to="/">Playlists</Link></li>
        </ul>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    </div>
 );
};

export default Sidebar;
