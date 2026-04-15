import Button from '../../ui/Button/Button';
import styles from './Track.module.css';

function Track(props) {
  return (
    <li className={styles.track}>
      <div className={styles.trackContent}>
        <h3 className={styles.trackTitle}>{props.song.title}</h3>
        <p className={styles.trackArtist}>{props.song.artist}</p>
        <p className={styles.trackAlbum}>{props.song.album}</p>
      </div>
      <Button 
        text={props.buttonText}
        onClick={() => props.buttonAction(props.song)}
        ariaLabel={props.buttonAriaLabel}
      />
    </li>
  )
}

export default Track;