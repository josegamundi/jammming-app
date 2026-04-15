import styles from './Track.module.css';

function Track(props) {
  return (
    <li className={styles.track}>
      <div className={styles.trackContent}>
        <h3 className={styles.trackTitle}>{props.title}</h3>
        <p className={styles.trackArtist}>{props.artist}</p>
        <p className={styles.trackAlbum}>{props.album}</p>
      </div>
      {props.children}
    </li>
  )
}

export default Track;