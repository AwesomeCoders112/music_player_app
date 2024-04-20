import React, { useState } from 'react';
import back from './back.jpg';

const Home = () => {
  const artists = [
    {
      name: 'Ariana Grande',
      image: 'https://i.scdn.co/image/ab67706f00000002dec0ec167f6ca2b02d0cc4fe',
      description: 'Ariana Grande is an American singer, songwriter, and actress. She is known for her powerful vocals and hit songs".',
    },
    {
      name: 'Ed Sheeran',
      image: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
      description: 'Ed Sheeran is an English singer-songwriter known for his acoustic folk-pop sound and hits like "Shape of You"".',
    },
    {
      name: 'Dua Lipa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9TwowSFHdnWlmPaFPKuQ4znfG-lAZyw_FRQvvYl2Uw&s',
      description: 'Dua Lipa is a British singer-songwriter known for her hit songs like "New Rules" and "Don\'t Start Now"..',
    },
  ];

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (name) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <img src={back} alt='logo' style={{ maxWidth: '100%', height: '120vh', backgroundBlendMode: 'multiply' }} />
      <div className='mycls' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10rem', color: 'yellow',marginTop: '-10rem' }}>Welcome to musiX player </h1>
        <h3 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '9rem' }}>Top trending Artists</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {artists.map((artist, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '1rem',
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.6s',
                width: '100px',
                height: '200px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src={artist.image} alt={artist.name} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '0.5rem' }} />
              <h3 style={{ fontWeight: 'bold' }}>{artist.name}</h3>
              <div>
                <span onClick={() => toggleDescription(artist.name)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Read More
                </span>
                {showDescription[artist.name] && (
                  <div style={{ marginTop: '0.5rem', textAlign: 'left', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    <p>{artist.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;