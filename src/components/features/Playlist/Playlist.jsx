import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
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
                  song={song}
                  buttonText='remove'
                  buttonAction={props.removeFromPlaylist}
                  buttonAriaLabel='Remove song from playlist'
                />
              )
            })
          }
        </TrackList>
      )}
      <div className={styles.playlistFooter}>
        <Button
          text='Save to Spotify'
          ariaLabel='Save the playlist to my Spotify account'
        />
      </div>
    </div>
  )
}

export default Playlist;