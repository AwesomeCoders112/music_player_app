import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  background-image: url('https://wallpapers.com/images/hd/green-and-black-background-6o7fi4exq0rbsvtw.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
  height: 85vh;
  

`;

const SearchInput = styled.input`
  width: 400px;
  height: 39px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  margin-top: 20px;

  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const RecentSearchesContainer = styled.div`
  width: 400px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const RecentSearchTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
`;

const RecentSearchItem = styled.div`
  padding: 8px 12px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setRecentSearches([...recentSearches, searchTerm]);
      // Perform search logic here
      console.log(`Searching for: ${searchTerm}`);
    }
  };

  const handleRecentSearchClick = (search) => {
    setSearchTerm(search);
    // Perform search logic here
    console.log(`Searching for: ${search}`);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for songs, artists, or albums"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      {recentSearches.length > 0 && (
        <RecentSearchesContainer>
          <RecentSearchTitle>Recent Searches</RecentSearchTitle>
          {recentSearches.map((search, index) => (
            <RecentSearchItem key={index} onClick={() => handleRecentSearchClick(search)}>
              {search}
            </RecentSearchItem>
          ))}
        </RecentSearchesContainer>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;