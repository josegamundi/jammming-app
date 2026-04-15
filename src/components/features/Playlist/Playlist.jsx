import Input from '../../ui/Input/Input';
import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
import Button from '../../ui/Button/Button';
import styles from './Playlist.module.css';

function Playlist(props) {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlistHeader}>
        <h2 className={styles.playlistTitle}>Playlist</h2>
        <Input />
      </div>
      {props.collection.length === 0 ? (
        <p className={styles.emptyMessage}>
          Add songs to your playlist
        </p>
      ) : (
        <TrackList>
          {
            props.collection.map((song) => {
              return (
                <Track 
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                >
                  <Button 
                    onClick={() => props.removeFromPlaylist(song)}
                    ariaLabel='Remove song from playlist'
                  >Remove</Button>
                </Track>
              )
            })
          }
        </TrackList>
      )}
      <div className={styles.playlistFooter}>
        <Button
          ariaLabel='Save the playlist to my Spotify account'
        >Save to Spotify </Button>
      </div>
    </div>
  )
}

export default Playlist;