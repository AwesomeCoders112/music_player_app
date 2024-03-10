import React from 'react';
import './Sidebar.css'; // Make sure to create and import the Sidebar.css file

const Sidebar = ({ isOpen, toggle }) => {
 return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggle}>Close</button>
      {/* Removed the image tag to ensure it doesn't appear in the sidebar */}
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Your Libraries</li>
        <li>Create Playlists</li>
      </ul>
      <br></br>
      <br></br>
      <ul>
        <li> Song 1 </li>
        <li> Song 2 </li>
        <li> Song 3 </li>
      </ul>
    </div>
 );
};

export default Sidebar;
