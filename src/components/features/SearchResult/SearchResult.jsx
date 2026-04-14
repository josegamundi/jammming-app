import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
import styles from './SearchResult.module.css';

function SearchResult(props) {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.searchResultTitle}>All songs</h2>
      <TrackList>
        {
          props.searchResults.map((song) => {
            return (
              <Track 
                key={song.id} 
                title={song.title}
                artist={song.artist}
                album={song.album}
              />
            )
          })
        }
      </TrackList>
    </div>
  )
}

export default SearchResult;