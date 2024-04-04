import React, { useState, useRef } from 'react';
import './playlist2.css';
import track0image from './images/playlist1-cover.jpg';
import track1 from './songs/SICKOMODE.mp3';
import track2 from './songs/familyties.mp3';
import track3 from './songs/mylife.mp3';
import track4 from './songs/humble.mp3';
import track5 from './songs/fatherstretch.mp3';
import track6 from './songs/godzilla.mp3';
import track7 from './songs/maskoff.mp3';
import track8 from './songs/hotellobby.mp3';
import track9 from './songs/dreamin.mp3';
import track10 from './songs/surroundsound.mp3';
import track11 from './songs/moneytrees.mp3';
import track1image from './images/sicko-mode.jpg';
import track2image from './images/family-ties.jpg';
import track3image from './images/mylife.jpg';
import track4image from './images/humble.jpg';
import track5image from './images/father-stretch.jpg';
import track6image from './images/godzilla.jpg';
import track7image from './images/mask-off.jpg';
import track8image from './images/HOTEL-LOBBY.jpg';
import track9image from './images/dreaming.jpg';
import track10image from './images/surround-sound.jpg';
import track11image from './images/money-trees.jpg';


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


const Playlist2 = () => {
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
          <h1 className="playlist-title">Hip Hop Playlist</h1>
          <p className="playlist-description">Modern Hip Hop</p>
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
              <p className="track-name">SICKO MODE</p>
              <p className="track-artist">Travid Scott</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3)}>
                {isPlaying[index * 3] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">5:12</span>
            </div>
          </div>

          {/* S\second track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 1] = el} src={getTrackSource(index * 3 + 1)} />
            <img src={getTrackImage(index * 3 + 1)} alt={`Track ${index * 3 + 2}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Family Ties</p>
              <p className="track-artist">Kendrick Lamar</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 1)}>
                {isPlaying[index * 3 + 1] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:12</span>
            </div>
          </div>

          {/* third track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 2] = el} src={getTrackSource(index * 3 + 2)} />
            <img src={getTrackImage(index * 3 + 2)} alt={`Track ${index * 3 + 3}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">m y . l i f e</p>
              <p className="track-artist">J. Cole</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 2)}>
                {isPlaying[index * 3 + 2] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:38</span>
            </div>
          </div>

          {/* fourth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 3] = el} src={getTrackSource(index * 3 + 3)} />
            <img src={getTrackImage(index * 3 + 3)} alt={`Track ${index * 3 + 4}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">HUMBLE.</p>
              <p className="track-artist">Kendrick Lamar</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 3)}>
                {isPlaying[index * 3 + 3] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:57</span>
            </div>
          </div>

          {/* fifth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 4] = el} src={getTrackSource(index * 3 + 4)} />
            <img src={getTrackImage(index * 3 + 4)} alt={`Track ${index * 3 + 5}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Father Stretch My Hands Pt. 1</p>
              <p className="track-artist">Kanye West</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 4)}>
                {isPlaying[index * 3 + 4] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:15</span>
            </div>
          </div>

          {/* sixth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 5] = el} src={getTrackSource(index * 3 + 5)} />
            <img src={getTrackImage(index * 3 + 5)} alt={`Track ${index * 3 + 6}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Godzilla</p>
              <p className="track-artist">Eminem</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 5)}>
                {isPlaying[index * 3 + 5] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:30</span>
            </div>
          </div>

          {/* seventh track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 6] = el} src={getTrackSource(index * 3 + 6)} />
            <img src={getTrackImage(index * 3 + 6)} alt={`Track ${index * 3 + 7}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Mask Off</p>
              <p className="track-artist">Future</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 6)}>
                {isPlaying[index * 3 + 6] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:24</span>
            </div>
          </div>

          {/* eighth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 7] = el} src={getTrackSource(index * 3 + 7)} />
            <img src={getTrackImage(index * 3 + 7)} alt={`Track ${index * 3 + 8}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">HOTEL LOBBY</p>
              <p className="track-artist">Quavo, Takeoff</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 7)}>
                {isPlaying[index * 3 + 7] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">2:22</span>
            </div>
          </div>

          {/* ninth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 8] = el} src={getTrackSource(index * 3 + 8)} />
            <img src={getTrackImage(index * 3 + 8)} alt={`Track ${index * 3 + 9}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Am i Dreaming</p>
              <p className="track-artist">Metro Boomin</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 8)}>
                {isPlaying[index * 3 + 8] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">4:16</span>
            </div>
          </div>

          {/* tenth track */}
          <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 9] = el} src={getTrackSource(index * 3 + 9)} />
            <img src={getTrackImage(index * 3 + 9)} alt={`Track ${index * 3 + 10}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Surround Sound</p>
              <p className="track-artist">JID</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 9)}>
                {isPlaying[index * 3 + 9] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">3:49</span>
            </div>
          </div>

           {/* eleventh track */}
           <div className="track" key={index}>
            <audio ref={el => audioRefs.current[index * 3 + 10] = el} src={getTrackSource(index * 3 + 10)} />
            <img src={getTrackImage(index * 3 + 10)} alt={`Track ${index * 3 + 11}`} className="track-image" />
            <div className="track-details">
              <p className="track-name">Money Trees</p>
              <p className="track-artist">Kendrick Lamar</p>
            </div>
            <div className="track-controls">
              <button className="play-button" onClick={() => togglePlay(index * 3 + 10)}>
                {isPlaying[index * 3 + 10] ? 'Pause' : 'Play'}
              </button>
              <span className="track-runtime">6:26</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default Playlist2;