import styles from "./card.module.css";

export function Card({ event }) {
  return (
    <div className={styles.cardEvent}>
      <img src={event.cover} alt={event.title} />
      <div className={styles.cardEvent__container}>
        <p className={styles.cardEvent__tag}>{event.theme.name}</p>
        <p className={styles.cardEvent__date}>{event.date.toLocaleDateString("pt-BR")}</p>
        <h4 className={styles.cardEvent__title}>{event.title}</h4>
        <p className={styles.cardEvent__description}>{event.description}</p>
      </div>
    </div>
  );

}
