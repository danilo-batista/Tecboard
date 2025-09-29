import styles from "./button.module.css";

export function Button({ children }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}
