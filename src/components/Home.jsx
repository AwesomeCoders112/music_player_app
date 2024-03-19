import React from 'react';
import styled from 'styled-components';

const PlaylistSection = styled.div`
  background-color: #1c1c1e;
  padding: 100px;
  width: 100%;
  height: 80%;
  margin-left: 200px;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  h2 {
    color: #fff;
    font-size: 24px;
    margin: 0;
  }

  p {
    color: #999;
    font-size: 14px;
    margin: 0;
  }
`;

const PlaylistControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #1db954;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Playlist = () => {
  return (
    <PlaylistSection>
      <PlaylistHeader>
        <img src="https://via.placeholder.com/60" alt="Playlist Icon" />
        <div>
          <h2>Heartbreak Hits | Saddest Songs Ever</h2>
          <p>Listen to the latest and best of heartbreak tracks! Follow Now!</p>
        </div>
        <div>
          <h2> All </h2>
          <h2> Music </h2>
          <h2> Podcasts </h2>
        </div>
      </PlaylistHeader>
      <PlaylistControls>
        <button>Play</button>
        <button>Follow</button>
        <button>...</button>
      </PlaylistControls>
    </PlaylistSection>
  );
};

export default Playlist;