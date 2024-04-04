import React, { useState, useRef } from 'react';
import './playlist1.css';
import track0image from './images/playlist1-cover.jpg';
import track1 from './songs/purplehaze.mp3';
import track1image from './images/purple-haze.jpeg';
import track2 from './songs/moonagedaydream.mp3';
import track2image from './images/moonage-daydream.jpg';
import track3 from './songs/gimmeshelter.mp3';
import track3image from './images/gimme-shelter.jpg';
import track4 from './songs/backinblack.mp3';
import track4image from './images/back-in-black.jpg';
import track5 from './songs/paranoid.mp3';
import track5image from './images/Black_Sabbath_-_Paranoid.jpg';
import track6 from './songs/entersandman.mp3';
import track6image from './images/enter-sandman.jpg';
import track7 from './songs/borntobewild.mp3';
import track7image from './images/Born_to-be_wild-steppenwolf-45.jpg';
import track8 from './songs/kashmir.mp3';
import track8image from './images/kashmir.jpeg';
import track9 from './songs/adam-cain.mp3';
import track9image from './images/adam-cain.jpg';
import track10 from './songs/fortunateson.mp3';
import track10image from './images/fortunate-son.jpg';
import track11 from './songs/roxanne.mp3';
import track11image from './images/roxanne.jpeg';

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
    
  }
};


const Playlist1 = () => {
  const [isPlaying, setIsPlaying] = useState(Array(11).fill(false));
   const audioRefs = useRef(Array(11).fill(null)); // Create refs for the audio elements
 
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
  
 
   return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img src={track0image} alt="Playlist Cover" className="playlist-image" />
        <div className="playlist-header-text">
          <h1 className="playlist-title">Rock & Roll Playlist</h1>
          <p className="playlist-description">GOAT Rock Songs</p>
        </div>
      </div>


      <div className="playlist-tracks">
      {Array.from({ length: 1 }, (_, index) => (
        <div className="track-container" key={index}>
          {/*first track */} 
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3] = el} src={getTrackSource(index * 3)} />
            <img src={getTrackImage(index * 3)} alt={`Track ${index * 3 + 1}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Purple Haze</p>
              <p className="track-artist">Jimi Hendrix</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3)}>
                {isPlaying[index * 3] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:50</span>
            </div>
          </div>

          {/* S\second track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 1] = el} src={getTrackSource(index * 3 + 1)} />
            <img src={getTrackImage(index * 3 + 1)} alt={`Track ${index * 3 + 2}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Moonage Daydream</p>
              <p className="track-artist">David Bowie</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 1)}>
                {isPlaying[index * 3 + 1] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:39</span>
            </div>
          </div>

          {/* third track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 2] = el} src={getTrackSource(index * 3 + 2)} />
            <img src={getTrackImage(index * 3 + 2)} alt={`Track ${index * 3 + 3}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Gimme Shelter</p>
              <p className="track-artist">The Rolling Stones</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 2)}>
                {isPlaying[index * 3 + 2] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:30</span>
            </div>
          </div>

          {/* fourth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 3] = el} src={getTrackSource(index * 3 + 3)} />
            <img src={getTrackImage(index * 3 + 3)} alt={`Track ${index * 3 + 4}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Back in Black</p>
              <p className="track-artist">AC/DC</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 3)}>
                {isPlaying[index * 3 + 3] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:15</span>
            </div>
          </div>

          {/* fifth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 4] = el} src={getTrackSource(index * 3 + 4)} />
            <img src={getTrackImage(index * 3 + 4)} alt={`Track ${index * 3 + 5}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Paranoid</p>
              <p className="track-artist">Black Sabbath</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 4)}>
                {isPlaying[index * 3 + 4] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:49</span>
            </div>
          </div>

          {/* sixth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 5] = el} src={getTrackSource(index * 3 + 5)} />
            <img src={getTrackImage(index * 3 + 5)} alt={`Track ${index * 3 + 6}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Enter Sandman</p>
              <p className="track-artist">Metallica</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 5)}>
                {isPlaying[index * 3 + 5] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">5:31</span>
            </div>
          </div>

          {/* seventh track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 6] = el} src={getTrackSource(index * 3 + 6)} />
            <img src={getTrackImage(index * 3 + 6)} alt={`Track ${index * 3 + 7}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Born to be Wild</p>
              <p className="track-artist">Steppenwolf</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 6)}>
                {isPlaying[index * 3 + 6] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:30</span>
            </div>
          </div>

          {/* eighth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 7] = el} src={getTrackSource(index * 3 + 7)} />
            <img src={getTrackImage(index * 3 + 7)} alt={`Track ${index * 3 + 8}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Kashmir</p>
              <p className="track-artist">Led Zeppelin</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 7)}>
                {isPlaying[index * 3 + 7] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">8:37</span>
            </div>
          </div>

          {/* ninth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 8] = el} src={getTrackSource(index * 3 + 8)} />
            <img src={getTrackImage(index * 3 + 8)} alt={`Track ${index * 3 + 9}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Adam Raised a Cain</p>
              <p className="track-artist">Bruce Springsteen</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 8)}>
                {isPlaying[index * 3 + 8] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:32</span>
            </div>
          </div>

          {/* tenth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 9] = el} src={getTrackSource(index * 3 + 9)} />
            <img src={getTrackImage(index * 3 + 9)} alt={`Track ${index * 3 + 10}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Fortunate Son</p>
              <p className="track-artist">Creedence Clearwater Revival</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 9)}>
                {isPlaying[index * 3 + 9] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:20</span>
            </div>
          </div>

           {/* eleventh track */}
           <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 10] = el} src={getTrackSource(index * 3 + 10)} />
            <img src={getTrackImage(index * 3 + 10)} alt={`Track ${index * 3 + 11}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Roxanne</p>
              <p className="track-artist">The Police</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 10)}>
                {isPlaying[index * 3 + 10] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:11</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default Playlist1;