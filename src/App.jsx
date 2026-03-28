import { useState } from 'react';
import styles from "./App.module.css";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            
            <h1>Jamming</h1>
          </div>
          <p className={styles.headerSubtitle}>
            Search for songs and create your custom playlist
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.searchSection}>
          <SearchBar/>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.resultsSection}>
            <div className={styles.resultsCard}>
              <h2 className={styles.sectionTitle}>
                Results
              </h2>
              <div className={styles.songsList}>
                
              </div>
            </div>
          </div>

          <div className={styles.playlistSection}>
            <div className={styles.stickyPlaylist}>
              PLaylist
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
