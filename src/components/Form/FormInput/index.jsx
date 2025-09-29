import styles from "./formInput.module.css";

export function FormInput(props) {
  return <input className={styles.input} {...props} />;
}
