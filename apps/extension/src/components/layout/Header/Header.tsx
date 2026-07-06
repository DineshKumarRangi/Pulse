import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>⚡ Pulse</h1>

      <p className={styles.subtitle}>
        Live Sports Updates
      </p>
    </header>
  );
}