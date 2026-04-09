import styles from './Input.module.css';

function Input(props) {
  return (
    <input 
      className={styles.input} 
      type="text" 
      placeholder="Search for songs, artists, genres..."
    />
  )
}

export default Input;