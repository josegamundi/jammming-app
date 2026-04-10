import SearchBar from './components/features/SearchBar/SearchBar';
import SearchResult from './components/features/SearchResult/SearchResult';
import Playlist from './components/features/Playlist/Playlist';
import styles from './App.module.css';

function App() {
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
          <SearchBar />
        </div>
        <div className={`${styles.section02} ${styles.row}`}>
          <SearchResult />
          <Playlist />
        </div>
      </main>
    </>
  )
}

export default App;
