import Button from '../../ui/Button/Button';
import styles from './Track.module.css';

function Track() {
  return (
    <li className={styles.track}>
      <div className={styles.trackContent}>
        <h3 className={styles.trackTitle}>Title song</h3>
        <p className={styles.trackArtist}>Artist</p>
        <p className={styles.trackAlbum}>Album</p>
      </div>
      <Button>Add</Button>
    </li>
  )
}

export default Track;