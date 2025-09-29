import styles from "./formLabel.module.css";

export function FormLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}
