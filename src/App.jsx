import { useState, useEffect } from "react";

import SearchBar from './components/features/SearchBar/SearchBar';
import SearchResult from './components/features/SearchResult/SearchResult';
import Playlist from './components/features/Playlist/Playlist';
import styles from './App.module.css';

import { searchSongs, mockMusicLibrary } from './utils/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const handleSearch = () => {
    const results = searchSongs(searchQuery);
    setSearchResults(results);
  };

  const handleAddToPlaylist = (song) => {
    if (currentPlaylist.some((item) => item.id === song.id)) {
      alert("Song already in playlist");
      return;
    }
    setCurrentPlaylist((prev) => [song, ...prev]);
    alert(`Added "${song.title}" to playlist`);
  };

  const handleRemoveFromPlaylist = (song) => {
    setCurrentPlaylist(currentPlaylist.filter((item) => item.id !== song.id));
    alert("Song removed from playlist");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContent} ${styles.row}`}>
          <h1 className={styles.headerTitle}>Jammming</h1>
          <p>Search for songs and create your custom playlist</p>
        </div>
      </header>
      <main>
        <div className={`${styles.section01} ${styles.row}`}>
          <SearchBar 
            query={searchQuery}
            setQuery={setSearchQuery}
            performSearch={handleSearch}
          />
        </div>
        <div className={`${styles.section02} ${styles.row}`}>
          <SearchResult 
            result={searchResults}
            addToPlaylist={handleAddToPlaylist}
          />
          <Playlist 
            collection={currentPlaylist}
            removeFromPlaylist={handleRemoveFromPlaylist}
          />
        </div>
      </main>
    </>
  )
}

export default App;
