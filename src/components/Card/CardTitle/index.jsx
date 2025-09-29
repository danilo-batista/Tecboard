import styles from "./cardTitle.module.css"; 

export function CardTitle({ theme }) {
  return <h3 className={styles.title}>{theme.name}</h3>;
}
