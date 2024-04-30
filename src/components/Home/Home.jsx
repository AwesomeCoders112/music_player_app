import React, { useState } from 'react';
import back from './back.jpg';

const artistsData = [
  {
    name: 'Ariana Grande',
    image: 'https://i.scdn.co/image/ab67706f00000002cd8e2b103295bbd2749d8ea7',
    wikiLink: 'https://en.wikipedia.org/wiki/Ariana_Grande',
  },
  {
    name: 'Arjit Singh',
    image: 'https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3',
    wikiLink: 'https://en.wikipedia.org/wiki/Arijit_Singh',
  },
  {
    name: 'Shirley Setia',
    image: 'https://i.scdn.co/image/ab6761610000e5ebcb5c9ca62fb06fa230a0fd07',
    wikiLink: 'https://en.wikipedia.org/wiki/Shirley_Setia',
  },
  // Add more artist objects here
];

const Home = () => {
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (name) => {
    setShowDescription((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const openWikiLink = (wikiLink) => {
    window.open(wikiLink, '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <img src={back} alt='logo' style={{ maxWidth: '100%', height: '120vh', backgroundBlendMode: 'multiply' }} />
      <div className='mycls' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10rem', color: 'yellow', marginTop: '-10rem' }}>Welcome to musiX player</h1>
        <h3 style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '9rem' }}>Top trending Artists</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {artistsData.map((artist, index) => (
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
                <span onClick={() => openWikiLink(artist.wikiLink)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;