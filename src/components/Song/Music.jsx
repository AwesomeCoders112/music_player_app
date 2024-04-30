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
import './styles1/music.css'


// Define function to get track source based on index
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
  }
};

// Define function to get track image based on index
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
  }
};

const SONGS = () => {
  const [isPlaying, setIsPlaying] = useState(Array(11).fill(false));
  const audioRefs = useRef(Array(11).fill(null)); // Create refs for the audio elements
  const [searchQuery, setSearchQuery] = useState('');

  const togglePlay = (index) => {
    const newIsPlaying = [...isPlaying]; // this creates copy of play state array
    newIsPlaying[index] = !newIsPlaying[index]; // this is to toggle play

    // Pause all other tracks when one will play
    for (let i = 0; i < newIsPlaying.length; i++) {
      if (i !== index && newIsPlaying[i]) {
        audioRefs.current[i].pause();
        newIsPlaying[i] = false;
      }
    }

    setIsPlaying(newIsPlaying); // Updates play state array

    // Play or pause the clicked track
    if (newIsPlaying[index]) {
      audioRefs.current[index].play();
    } else {
      audioRefs.current[index].pause();
    }
  };

  // Function to filter tracks based on search query
  const filterTracks = (trackName, trackArtist) => {
    const query = searchQuery.toLowerCase();
    return trackName.toLowerCase().includes(query) || trackArtist.toLowerCase().includes(query);
  };

  return (
    <div className="playlist-page3">
      <div className="playlist-header3">
        <div className="playlist-header-text3">
          <h1 className="playlist-title3">SONGS</h1>
        </div>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for tracks, artists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="playlist-search3"
      />

      <div className="playlist-tracks3">
        {Array.from({ length: 1 }, (_, index) => (
          <div className="track-container3" key={index}>
            {/* Render each track */}
            {[19, 20, 21, 12, 11, 13, 14, 15, 16, 17, 18, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((subIndex) => {
              const trackIndex = index * 11 + subIndex;
              const trackName = subIndex === 0 ? 'Purple Haze' : subIndex === 1 ? 'Moonage Daydream': subIndex === 2 ? 'Gimme Shelter' : subIndex === 3 ? 'Back in Black' : subIndex === 4 ? 'Paranoid' : subIndex === 5 ? 'Enter Sandman' : subIndex === 6 ? 'Born to be Wild' : subIndex === 7 ? 'Kashmir' : subIndex === 8 ? 'Adam Raised a Cain' : subIndex === 9 ? 'Fortunate Son' : subIndex === 10 ? 'Roxanne' : subIndex === 11 ? 'SICKO MODE' : subIndex === 12 ? 'family ties' : subIndex === 13 ? 'm y . l i f e' : subIndex === 14 ? 'HUMBLE.' : subIndex === 15 ? 'Father Stretch My Hnads Pt. 1' : subIndex === 16 ? 'Godzilla (feat. Juice WRLD)' : subIndex === 17 ? 'Mask Off' : subIndex === 18 ? 'HOTEL LOBBY (Unc & Phew)' : subIndex === 19 ? 'Am I Dreaming (Metro Boomin & A$AP Rocky, Roisee)' : subIndex === 20 ? 'Surround Sound':  'Money Trees' ;
              const trackArtist = subIndex === 0 ? 'Jimi Hendrix' : subIndex === 1 ? 'David Bowie': subIndex === 2 ? 'The Rolling Stones' : subIndex === 3 ? 'AC/DC' : subIndex === 4 ? 'Black Sabbath' : subIndex === 5 ? 'Metallica' : subIndex === 6 ? 'Steppenwolf' : subIndex === 7 ? 'Led Zeppelin' : subIndex === 8 ? 'Bruce Springsteen' : subIndex === 9 ? 'Creedence Clearwater Revival' : subIndex === 10 ? 'The Police' : subIndex === 11 ? 'Travis Scott' : subIndex === 12 ? 'Baby Keem, Kendrick Lamar' : subIndex === 13 ? 'J. Cole, 21 Savage, Morray': subIndex === 14 ? 'Kendrick Lamar' : subIndex === 15 ? 'Kanye West' : subIndex === 16 ? 'Eminem, Juice WRLD' : subIndex === 17 ? 'Future' : subIndex === 18 ? 'Quavo, Takeoff' : subIndex === 19 ? 'Metro Boomin & A$AP Rocky, Roisee' : subIndex === 20 ? 'JID, 21 Savage, Baby Tate':  'Kendrick Lamar' ;
              const trackRuntime = subIndex === 0 ? '2:50' : subIndex === 1 ? '4:39' : subIndex === 2 ? '4:30' : subIndex === 3 ? '4:15' : subIndex === 4 ? '2:46' : subIndex === 5 ? '5:31' : subIndex === 6 ? '3:30' : subIndex === 7 ? '8:37' : subIndex === 8 ? '4:32' : subIndex === 9 ? '2:20' : subIndex === 10 ? '3:11' : subIndex === 11 ? '5:12' : subIndex === 12 ? '4:12' : subIndex === 13 ? '3:38' : subIndex === 14 ? '2:57' : subIndex === 15 ? '2:15' : subIndex === 16 ? '3:30' : subIndex === 17 ? '3:24' : subIndex === 18 ? '2:22' : subIndex === 19 ? '4:16' : subIndex === 20 ? '3:49' : '6:26' ;

              return (
                filterTracks(trackName, trackArtist) && (
                  <div className="track3" key={trackIndex}>
                    <audio ref={(el) => (audioRefs.current[trackIndex] = el)} src={getTrackSource(trackIndex)} />
                    <img src={getTrackImage(trackIndex)} alt={`Track ${trackIndex + 1}`} className="track-image3" />
                    <div className="track-details3">
                      <p className="track-name3">{trackName}</p>
                      <p className="track-artist3">{trackArtist}</p>
                    </div>
                    <div className="track-controls3">
                      <button className="play-button3" onClick={() => togglePlay(trackIndex)}>
                        {isPlaying[trackIndex] ? 'Pause' : 'Play'}
                      </button>
                      <span className="track-runtime3">{trackRuntime}</span>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SONGS;