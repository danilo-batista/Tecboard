import styles from "./banner.module.css";

export function Banner() {
  return (
    <figure className={styles.banner}>
      <img
        src="/images/tecboard-banner-320.png"
        alt="Banner com texto Seu Hub de eventos de tecnologia"
        className={styles.banner__image}
        loading="lazy"
      />
    </figure>
  );
}
