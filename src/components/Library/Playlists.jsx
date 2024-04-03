import React, { useState } from 'react';
import styled from 'styled-components';

// Dummy data for songs
const songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1' },
  { id: 2, title: 'Song 2', artist: 'Artist 2' },
  { id: 3, title: 'Song 3', artist: 'Artist 3' },
  { id: 4, title: 'Song 4', artist: 'Artist 4' },
  { id: 5, title: 'Song 5', artist: 'Artist 5' },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 80vh;
  background-image: url('https://wallpapers.com/images/hd/green-and-black-background-6o7fi4exq0rbsvtw.jpg');
  color: white;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  position: relative;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PlaylistTitle = styled.h3`
  margin-right: 10px;
`;

const SongList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SongItem = styled.li`
  margin-bottom: 5px;
`;

const CreatePlaylistModal = ({ isOpen, onClose, onCreatePlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSongSelect = (song) => {
    setSelectedSongs((prevSelectedSongs) =>
      prevSelectedSongs.includes(song)
        ? prevSelectedSongs.filter((s) => s.id !== song.id)
        : [...prevSelectedSongs, song]
    );
  };

  const handleCreatePlaylist = () => {
    onCreatePlaylist(playlistName, selectedSongs);
    setPlaylistName('');
    setSelectedSongs([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Create Playlist</h2>
        <input
          type="text"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={handlePlaylistNameChange}
        />
        <h3>Select Songs:</h3>
        {songs.map((song) => (
          <div key={song.id}>
            <input
              type="checkbox"
              checked={selectedSongs.includes(song)}
              onChange={() => handleSongSelect(song)}
            />
            <span>{song.title} - {song.artist}</span>
          </div>
        ))}
        <Button onClick={handleCreatePlaylist}>Create Playlist</Button>
      </ModalContent>
    </Modal>
  );
};

const Playlist = ({ playlists }) => {
  return (
    <PlaylistContainer>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id}>
          <PlaylistTitle>{playlist.name}</PlaylistTitle>
          <SongList>
            {playlist.songs.map((song) => (
              <SongItem key={song.id}>
                {song.title} - {song.artist}
              </SongItem>
            ))}
          </SongList>
        </PlaylistItem>
      ))}
    </PlaylistContainer>
  );
};

const MusicPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const createPlaylist = (name, songs) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name,
      songs,
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <Container>
      <Button onClick={openModal}>Create Playlist</Button>
      {showModal && (
        <CreatePlaylistModal
          isOpen={showModal}
          onClose={closeModal}
          onCreatePlaylist={createPlaylist}
        />
      )}
      <Playlist playlists={playlists} />
    </Container>
  );
};

export default MusicPlayer;