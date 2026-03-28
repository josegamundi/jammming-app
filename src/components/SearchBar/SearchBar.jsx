import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for songs, artists, genres..."
        value=""
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>Search</button>
    </div>
  );
}

export default SearchBar;