import styles from './ButtonAcceptForm.module.css'

export function ButtonAcceptForm({text, isDisabled}) {
  return(
    <button className={styles.button} disabled={isDisabled}>
      <div className={styles.text}>{text}</div>
    </button>
  );
}