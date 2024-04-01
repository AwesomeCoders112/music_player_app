import React, { useState } from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

export default function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevTrack = () => {
    // Handle previous track logic here
    console.log("Previous track");
  };

  const handleNextTrack = () => {
    // Handle next track logic here
    console.log("Next track");
  };

  return (
    <Container>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={handlePrevTrack} />
      </div>
      <div className="state">
        {isPlaying ? (
          <BsFillPauseCircleFill onClick={togglePlayPause} />
        ) : (
          <BsFillPlayCircleFill onClick={togglePlayPause} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={handleNextTrack} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
      {/* Audio element */}
      <audio src="../music1.mp3" autoPlay={isPlaying} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  gap: 4rem;
  height: 7.5vh;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;
