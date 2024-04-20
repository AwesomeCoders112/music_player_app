import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'green',
        height: '8.5vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }}>
          Music Player
        </Link>
      </div>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <li style={{ marginRight: '52rem' }}>
            <Link style={{ textDecoration: 'none', color: 'white' }}></Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginRight: '1rem' }}>Follow us on:</h3>
        <a href="#" style={{ textDecoration: 'none', color: 'white', marginRight: '1rem' }}>
          <FaFacebookF size={20} />
        </a>
        <a href="#" style={{ textDecoration: 'none', color: 'white', marginRight: '1rem' }}>
          <FaTwitter size={20} />
        </a>
        <a href="#" style={{ textDecoration: 'none', color: 'white', marginRight: '1rem' }}>
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;