import { useState } from 'react';
import styles from "./App.module.css";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Jamming</h1>
          <p>
            Search for songs and create your custom playlist
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
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
              <h2 className={styles.sectionTitle}>
                PLaylist
              </h2>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}

export default App
