import styles from "./formTitle.module.css";

export function FormTitle({ children }) {
  return <h2 className={styles.formTitle}>{children}</h2>;
}
