import React from 'react';
import back from '../back.jpg';

const Home = () => {
  const artists = [
    { name: 'Ariana Grande', image: 'https://example.com/ariana.jpg' },
    { name: 'Ed Sheeran', image: 'https://example.com/edsheeran.jpg' },
    { name: 'Dua Lipa', image: 'https://example.com/dualipa.jpg' },
    { name: 'The Weeknd', image: 'https://example.com/theweeknd.jpg' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <img src={back} alt='logo' style={{ maxWidth: '100%', height: '85vh', backgroundBlendMode: 'multiply' }} />
      <div className='mycls' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Music Player</h1>
        <h2 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem' }}> Top trending Artists </h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {artists.map((artist, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '1rem',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={artist.image} alt={artist.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '0.5rem' }} />
              <h3 style={{ fontWeight: 'bold' }}>{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;