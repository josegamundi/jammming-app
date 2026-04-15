import styles from './Input.module.css';

function Input(props) {
  return (
    <input 
      type="text" 
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      className={styles.input}
    />
  )
}

export default Input;