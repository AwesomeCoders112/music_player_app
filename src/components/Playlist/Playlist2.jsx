import React from 'react'
import track0image from './images/playlist1-cover.jpg';
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



const Playlist2 = () => {
  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img
         src={track0image}
          alt="Playlist Cover"
          className="playlist-image"
        />
        <div className="playlist-header-text">
          <h1 className="playlist-title">Hip Hop Playlist</h1>
          <p className="playlist-description">Modern Hip Hop</p>
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
            <p className="track-name">SICKO MODE</p>
            <p className="track-artist">Travis Scott</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">5:12</span> 
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
            <p className="track-name">Family Ties</p>
            <p className="track-artist">Kendrick Lamar</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:12</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track3image}
            alt="Track 3"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">m y . l i f e</p>
            <p className="track-artist">J. Cole</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:38</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track4image}
            alt="Track 4"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">HUMBLE.</p>
            <p className="track-artist">Kendrick Lamar</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:57</span> 
          </div>
        </div>
        <div className="track">
          <img
            src= {track5image}
            alt="Track 5"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Father Stretch My Hands Pt. 1</p>
            <p className="track-artist">Kanye West</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:15</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track6image}
            alt="Track 6"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Godzilla</p>
            <p className="track-artist">Eminem</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:30</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track7image}
            alt="Track 7"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Mask Off</p>
            <p className="track-artist">Future</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:24</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track8image}
            alt="Track 8"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">HOTEL LOBBY</p>
            <p className="track-artist">Quavo, Takeoff</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">2:22</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track9image}
            alt="Track 9"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Am I Dreaming</p>
            <p className="track-artist">Metro Boomin</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">4:16</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track10image}
            alt="Track 10"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Surround Sound</p>
            <p className="track-artist">JID</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">3:49</span> 
          </div>
        </div>
        <div className="track">
          <img
            src={track11image}
            alt="Track 11"
            className="track-image"
          />
          <div className="track-details">
            <p className="track-name">Money Trees</p>
            <p className="track-artist">Kendrick Lamar</p>
          </div>
          <div className="track-controls">
            <button className="play-button">Play</button>
            <button className="add-button">Add to Queue</button>
            <span className="track-runtime">6:26</span> 
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default Playlist2