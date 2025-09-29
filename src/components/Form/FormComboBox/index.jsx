import styles from "./formComboBox.module.css";

export function FormComboBox({ themes, ...rest }) {
  return (
    <select {...rest} className={styles.select} defaultValue="">
      <option value="" disabled>
        Selecione
      </option>
      {themes.map((theme) => {
        return (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        );
      })}
    </select>
  );
}
