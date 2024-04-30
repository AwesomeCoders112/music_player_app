import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const formattedDateTime = now.toLocaleString('en-US', options);
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <nav>
        <div className="brand">
          <span className="icon">&#127925;</span>
          <a href="#">MyApp</a>
        </div>
        <div className="date-time">
          <span className="apple-font">{currentDateTime}</span>
        </div>
        <div className="nav-toggle">
          <button onClick={toggleNav}>&#9776;</button>
        </div>
        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: black;
          color: #fff;
          height: 3vh;
        }
        .brand {
          display: flex;
          align-items: center;
        }
        .brand a {
          font-family: 'Righteous', cursive;
          font-size: 2rem;
          font-weight: bold;
          color: yellow;
          text-decoration: none;
          animation: neon 1.5s ease-in-out infinite alternate;
        }
        .icon {
          font-size: 2.5rem;
          margin-right: 0.5rem;
          animation: spin 2s linear infinite;
        }
        .date-time {
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          font-size: 1.2rem;
          color: #fff;
          animation: fade 2s ease-in-out infinite alternate;
        }
        .apple-font {
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }
        .nav-toggle button {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .nav-links {
          display: none;
        }
        .nav-links.open {
          display: block;
        }
        .nav-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-links li {
          margin-bottom: 0.5rem;
        }
        .nav-links a {
          font-family: 'Righteous', cursive;
          font-size: 1.2rem;
          color: #fff;
          text-decoration: none;
          animation: neon 1.5s ease-in-out infinite alternate;
        }
        .nav-links a:hover {
          color: #ccc;
        }
        @media (min-width: 768px) {
          .nav-toggle {
            display: none;
          }
          .nav-links {
            display: flex;
          }
          .nav-links ul {
            display: flex;
          }
          .nav-links li {
            margin-right: 1rem;
            margin-bottom: 0;
          }
        }
        @keyframes neon {
          from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          to {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
