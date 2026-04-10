import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import TrackList from '../../ui/TrackList/TrackList';
import Track from '../../ui/Track/Track';
import styles from './Playlist.module.css';

function Playlist() {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlistHeader}>
        <h2 className={styles.playlistTitle}>Playlist</h2>
        <Input />
      </div>
      <TrackList>
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </TrackList>
      <div className={styles.playlistFooter}>
        <Button>Save to Spotify</Button>
      </div>
    </div>
  )
}

export default Playlist;