import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

const songs = [
  { id: 1, title: "Song 1", src: "./music1.mp3" },
  { id: 2, title: "Song 2", src: "./music2.mp3" },
  { id: 3, title: "Song 3", src: "./music3..mp3" },
  // Add more songs as needed
];

export default function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio());

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevTrack = () => {
    const newIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    setCurrentTrackIndex(newIndex);
    playTrack(newIndex);
  };

  const handleNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % songs.length;
    setCurrentTrackIndex(newIndex);
    playTrack(newIndex);
  };

  const playTrack = (index) => {
    try {
      audioRef.current.src = songs[index].src;
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing track:', error);
    }
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
      <audio ref={audioRef} />
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
