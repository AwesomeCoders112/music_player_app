import React from 'react';
import './Sidebar.css'; // Make sure to create and import the Sidebar.css file

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggle}>Close</button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;