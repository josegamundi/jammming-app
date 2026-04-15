import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
}

export default Button;