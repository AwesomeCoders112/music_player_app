import React, { useState, useRef } from 'react';
import track0image from './images1/playlist1-cover.jpg';
import track1 from './songs1/purplehaze.mp3';
import track1image from './images1/purple-haze.jpeg';
import track2 from './songs1/moonagedaydream.mp3';
import track2image from './images1/moonage-daydream.jpg';
import track3 from './songs1/gimmeshelter.mp3';
import track3image from './images1/gimme-shelter.jpg';
import track4 from './songs1/backinblack.mp3';
import track4image from './images1/back-in-black.jpg';
import track5 from './songs1/paranoid.mp3';
import track5image from './images1/Black_Sabbath_-_Paranoid.jpg';
import track6 from './songs1/entersandman.mp3';
import track6image from './images1/enter-sandman.jpg';
import track7 from './songs1/borntobewild.mp3';
import track7image from './images1/Born_to-be_wild-steppenwolf-45.jpg';
import track8 from './songs1/kashmir.mp3';
import track8image from './images1/kashmir.jpeg';
import track9 from './songs1/adam-cain.mp3';
import track9image from './images1/adam-cain.jpg';
import track10 from './songs1/fortunateson.mp3';
import track10image from './images1/fortunate-son.jpg';
import track11 from './songs1/roxanne.mp3';
import track11image from './images1/roxanne.jpeg';
import track12 from './songs1/SICKOMODE.mp3';
import track13 from './songs1/familyties.mp3';
import track14 from './songs1/mylife.mp3';
import track15 from './songs1/humble.mp3';
import track16 from './songs1/fatherstretch.mp3';
import track17 from './songs1/godzilla.mp3';
import track18 from './songs1/maskoff.mp3';
import track19 from './songs1/hotellobby.mp3';
import track20 from './songs1/dreamin.mp3';
import track21 from './songs1/surroundsound.mp3';
import track22 from './songs1/moneytrees.mp3';
import track12image from './images1/sicko-mode.jpg';
import track13image from './images1/family-ties.jpg';
import track14image from './images1/mylife.jpg';
import track15image from './images1/humble.jpg';
import track16image from './images1/father-stretch.jpg';
import track17image from './images1/godzilla.jpg';
import track18image from './images1/mask-off.jpg';
import track19image from './images1/HOTEL-LOBBY.jpg';
import track20image from './images1/dreaming.jpg';
import track21image from './images1/surround-sound.jpg';
import track22image from './images1/money-trees.jpg';
import './styles1/musicX.css';

const tracksData = [
  {
    trackName: 'Purple Haze',
    trackArtist: 'Jimi Hendrix',
    trackRuntime: '2:50',
  },
  {
    trackName: 'Moonage Daydream',
    trackArtist: 'David Bowie',
    trackRuntime: '4:39',
  },
  {
    trackName: 'Gimme Shelter',
    trackArtist: 'The Rolling Stones',
    trackRuntime: '4:30',
  },
  {
    trackName: 'Back in Black',
    trackArtist: 'AC/DC',
    trackRuntime: '4:15',
    
  },
  {
    trackName: 'Paranoid',
    trackArtist: 'Black Sabbath',
    trackRuntime: '2:46',
  },
  {
    trackName: 'Enter Sandman',
    trackArtist: 'Metallica',
    trackRuntime: '5:31',
  },
  {
    trackName: 'Born to be Wild',
    trackArtist: 'Steppenwolf',
    trackRuntime: '3:30',
  },
  {
    trackName: 'Kashmir',
    trackArtist: 'Led Zeppelin',
    trackRuntime: '8:37',
  },
  {
    trackName: 'Adam Raised a Cain',
    trackArtist: 'Bruce Springsteen',
    trackRuntime: '4:32',
  },
  {
    trackName: 'Fortunate Son',
    trackArtist: 'Creedence Clearwater Revival',
    trackRuntime: '2:20',
  },
  {
    trackName: 'Roxanne',
    trackArtist: 'The Police',
    trackRuntime: '3:11',
  },
  {
    trackName: 'SICKO MODE',
    trackArtist: 'Travis Scott',
    trackRuntime: '5:12',
  },
  {
    trackName: 'family ties',
    trackArtist: 'Baby Keem, Kendrick Lamar',
    trackRuntime: '4:12',
  },
  {
    trackName: 'm y . l i f e',
    trackArtist: 'J. Cole, 21 Savage, Morray',
    trackRuntime: '3:38',
  },
  {
    trackName: 'HUMBLE.',
    trackArtist: 'Kendrick Lamar',
    trackRuntime: '2:57',
  },
  {
    trackName: 'Father Stretch My Hnads Pt. 1',
    trackArtist: 'Kanye West',
    trackRuntime: '2:15',
  },
  {
    trackName: 'Godzilla (feat. Juice WRLD)',
    trackArtist: 'Eminem, Juice WRLD',
    trackRuntime: '3:30',
  },
  {
    trackName: 'Mask Off',
    trackArtist: 'Future',
    trackRuntime: '3:24',
  },
  {
    trackName: 'HOTEL LOBBY (Unc & Phew)',
    trackArtist: 'Quavo, Takeoff',
    trackRuntime: '2:22',
  },
  {
    trackName: 'Am I Dreaming (Metro Boomin & A$AP Rocky, Roisee)',
    trackArtist: 'Metro Boomin & A$AP Rocky, Roisee',
    trackRuntime: '4:16',
  },
  {
    trackName: 'Surround Sound',
    trackArtist: 'JID, 21 Savage, Baby Tate',
    trackRuntime: '3:49',
  },
  {
    trackName: 'Money Trees',
    trackArtist: 'Kendrick Lamar',
    trackRuntime: '6:26',
  },
];

const getTrackSource = (index) => {
  switch (index) {
    case 0:
      return track1;
    case 1:
      return track2;
    case 2:
      return track3;
    case 3:
      return track4;
    case 4:
      return track5;
    case 5:
      return track6;
    case 6:
      return track7;
    case 7:
      return track8;
    case 8:
      return track9;
    case 9:
      return track10;
    case 10:
      return track11;
    case 11:
      return track12;
    case 12:
      return track13;
    case 13:
      return track14;
    case 14:
      return track15;
    case 15:
      return track16;
    case 16:
      return track17;
    case 17:
      return track18;
    case 18:
      return track19;
    case 19:
      return track20;
    case 20:
      return track21;
    case 21:
      return track22;
    default:
      return null;
  }
};

const getTrackImage = (index) => {
  switch (index) {
    case 0:
      return track1image;
    case 1:
      return track2image;
    case 2:
      return track3image;
    case 3:
      return track4image;
    case 4:
      return track5image;
    case 5:
      return track6image;
    case 6:
      return track7image;
    case 7:
      return track8image;
    case 8:
      return track9image;
    case 9:
      return track10image;
    case 10:
      return track11image;
    case 11:
      return track12image;
    case 12:
      return track13image;
    case 13:
      return track14image;
    case 14:
      return track15image;
    case 15:
      return track16image;
    case 16:
      return track17image;
    case 17:
      return track18image;
    case 18:
      return track19image;
    case 19:
      return track20image;
    case 20:
      return track21image;
    case 21:
      return track22image;
    default:
      return null;
  }
};

const Playlists = () => {
    const [isPlaying, setIsPlaying] = useState(Array(tracksData.length).fill(false));
    const [selectedSongs, setSelectedSongs] = useState([]);
    const audioRefs = useRef([]);
    const [searchQuery, setSearchQuery] = useState('');
    const togglePlay = (index) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);

    if (newIsPlaying[index]) {
        audioRefs.current[index].play();
      } else {
        audioRefs.current[index].pause();
      }
      };
      const toggleSelection = (index) => {
      if (selectedSongs.includes(index)) {
      setSelectedSongs(selectedSongs.filter((i) => i !== index));
      } else {
      setSelectedSongs([...selectedSongs, index]);
      }
      };
      const filterTracks = (trackName, trackArtist) => {
      const query = searchQuery.toLowerCase();
      return trackName.toLowerCase().includes(query) || trackArtist.toLowerCase().includes(query);
      };
      const createPlaylist = (selectedSongs) => {
      // Implement the logic to create the playlist with the selected songs
      console.log('Creating playlist with selected songs:', selectedSongs);
      // You can save the playlist data to a server or perform any other necessary operations
      };

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img src={track0image} alt="Playlist Cover" className="playlist-image" />
        <div className="playlist-header-text">
          <h1 className="playlist-title">CREATE YOUR OWN PLAYLIST</h1>
        </div>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for tracks, artists..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="playlist-search"
      />

      {/* Display tracks */}
      <div className="playlist-tracks">
        {tracksData.map((track, index) => {
          const { trackName, trackArtist, trackRuntime } = track;

          return (
            filterTracks(trackName, trackArtist, searchQuery) && (
              <div className="track" key={index}>
                <audio ref={(el) => (audioRefs.current[index] = el)} src={getTrackSource(index)} />
                <img src={getTrackImage(index)} alt={`Track ${index + 1}`} className="track-image" />
                <div className="track-details">
                  <p className="track-name">{trackName}</p>
                  <p className="track-artist">{trackArtist}</p>
                </div>
                <div className="track-controls">
                  <button className="play-button" onClick={() => togglePlay(index)}>
                    {isPlaying[index] ? 'Pause' : 'Play'}
                  </button>
                  <button
                    className={`select-button ${selectedSongs.includes(index) ? 'selected' : ''}`}
                    onClick={() => toggleSelection(index)}
                  >
                    {selectedSongs.includes(index) ? 'Deselect' : 'Select'}
                  </button>
                  <span className="track-runtime">{trackRuntime}</span>
                </div>
              </div>
            )
          );
        })}
      </div>

      {/* Display selected songs for playlist creation */}
      {selectedSongs.length > 0 && (
        <div className="playlist-creator">
          <h2>Create Playlist</h2>
          <ul>
            {selectedSongs.map((index) => (
              <li key={index}>
                {tracksData[index].trackName} - {tracksData[index].trackArtist}
              </li>
            ))}
          </ul>
          {/* Handle playlist creation */}
          <button onClick={() => createPlaylist(selectedSongs)}>Create Playlist</button>
        </div>
      )}
    </div>
  );
};

export default Playlists;