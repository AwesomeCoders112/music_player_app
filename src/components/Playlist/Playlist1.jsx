import React from 'react';
import './playlist.css';
import track0image from './images/playlist1-cover.jpg';
import track1image from './images/purple-haze.jpeg';
import track2image from './images/moonage-daydream.jpg';
import track3image from './images/gimme-shelter.jpg';
import track4image from './images/back-in-black.jpg';
import track5image from './images/Black_Sabbath_-_Paranoid.jpg';
import track6image from './images/enter-sandman.jpg';
import track7image from './images/Born_to-be_wild-steppenwolf-45.jpg';
import track8image from './images/kashmir.jpeg';
import track9image from './images/adam-cain.jpg';
import track10image from './images/fortunate-son.jpg';
import track11image from './images/roxanne.jpeg';



const Playlist1 = () => {
  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img
         src={track0image}
          alt="Playlist Cover"
          className="playlist-image"
        />
        <div className="playlist-header-text">
          <h1 className="playlist-title">Rock & Roll Playlist</h1>
          <p className="playlist-description">GOAT Rock Songs</p>
        </div>
      </div>

      <div className="playlist-tracks">
        <div className="track">
          <img
            src={track1image}
            alt="Track 1"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Purple Haze</p>
            <p className="track-artist">Jimi Hendrix</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:50</span> 
            <span className="track-runtime"></span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track2image}
            alt="Track 2"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Moonage Daydream</p>
            <p className="track-artist">David Bowie</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:39</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track3image}
            alt="Track 3"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Gimme Shelter</p>
            <p className="track-artist">The Rolling Stones</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:30</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track4image}
            alt="Track 4"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Back in Black</p>
            <p className="track-artist">AC/DC</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:15</span> 
          </div>
        </div>
        <div className="track">
          <img
            src= {track5image}
            alt="Track 5"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Paranoid</p>
            <p className="track-artist">Black Sabbath</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:49</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track6image}
            alt="Track 6"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Enter Sandman</p>
            <p className="track-artist">Metallica</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">5:31</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track7image}
            alt="Track 7"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Born to be Wild</p>
            <p className="track-artist">Steppenwolf</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:30</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track8image}
            alt="Track 8"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Kashmir</p>
            <p className="track-artist">Led Zeppelin</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">8:37</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track9image}
            alt="Track 9"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Adam Raised a Cain</p>
            <p className="track-artist">Bruce Springsteen</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:32</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track10image}
            alt="Track 10"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Fortunate Son</p>
            <p className="track-artist">Creedence Clearwater Revival</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:20</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track11image}
            alt="Track 11"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Roxanne</p>
            <p className="track-artist">The Police</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:11</span> 
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default Playlist1