import styles from './App.module.css'

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
        <div className={styles.row}>
          
        </div>
        <div className={styles.row}>

        </div>
      </main>
    </>
  )
}

export default App;
