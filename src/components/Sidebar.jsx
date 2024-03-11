import React from 'react';
import unnamed from './unnamed.png'; // Replace this with the correct path to your logo image
import './Sidebar.css'; // Ensure this CSS file exists and contains styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={unnamed} alt="Logo" className="sidebar-logo" />
      <div className="sidebar-list-container">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Your Libraries</li>
          <li>Create Playlists</li>
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