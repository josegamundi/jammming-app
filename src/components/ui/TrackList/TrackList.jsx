import styles from './TrackList.module.css';

function TrackList(props) {
  return (
    <ul className={styles.trackList}>{props.children}</ul>
  )
}

export default TrackList;