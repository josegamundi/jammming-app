import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
import styles from './SearchResult.module.css';

function SearchResult(props) {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.searchResultTitle}>Results</h2>
      {props.result.length === 0 ? (
        <p className={styles.emptyMessage}>
          No songs found. Try a new search term.
        </p>
      ) : (
        <TrackList>
          {
            props.result.map((song) => {
              return (
                <Track 
                  key={song.id}
                  song={song}
                  buttonText='Add'
                  buttonAction={props.addToPlaylist}
                  buttonAriaLabel='Add song to playlist'
                />
              )
            })
          }
        </TrackList>
      )}
    </div>
  )
}

export default SearchResult;