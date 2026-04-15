import Track from '../../ui/Track/Track';
import Button from '../../ui/Button/Button';
import styles from './SearchResult.module.css';

function SearchResult(props) {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.searchResultTitle}>Results</h2>
      {props.result.length === 0 ? (
        <p>
          No songs found. Try a new search term.
        </p>
      ) : (
        <ul>
          {
            props.result.map((song) => {
              return (
                <Track 
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                >
                  <Button 
                    onClick={() => props.addToPlaylist(song)}
                    ariaLabel='Add song to playlist'
                  >Add</Button>
                </Track>
              )
            })
          }
        </ul>
      )}
    </div>
  )
}

export default SearchResult;