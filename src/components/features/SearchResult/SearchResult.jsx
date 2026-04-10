import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
import styles from './SearchResult.module.css';

function SearchResult() {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.searchResultTitle}>All songs</h2>
      <TrackList>
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </TrackList>
    </div>
  )
}

export default SearchResult;