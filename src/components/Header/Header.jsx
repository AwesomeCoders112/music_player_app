import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav>
        <div className="brand">
          <a href="#">MyApp</a>
        </div>
        <div className="nav-toggle">
          <button onClick={toggleNav}>&#9776;</button>
        </div>
        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
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
        }

        .brand a {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
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
          color: #fff;
          text-decoration: none;
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
      `}</style>
    </header>
  );
};

export default Header;