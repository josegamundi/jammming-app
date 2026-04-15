import { useState, useEffect } from "react";

import SearchBar from './components/features/SearchBar/SearchBar';
import SearchResult from './components/features/SearchResult/SearchResult';
import Playlist from './components/features/Playlist/Playlist';
import styles from './App.module.css';

import { searchSongs, mockMusicLibrary } from './utils/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = searchSongs(searchQuery);
    setSearchResults(results);
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
          <SearchResult searchResults={searchResults} />
          <Playlist />
        </div>
      </main>
    </>
  )
}

export default App;
