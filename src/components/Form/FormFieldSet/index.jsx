import styles from "./formFieldSet.module.css";

export function FormFieldSet({ children }) {
  return <fieldset className={styles.fieldSet}>{children}</fieldset>;
}
