import styles from "./Navigation.module.css";
import type { NavigationProps } from "./Navigation.types";

export default function Navigation({
  activeTab,
  onTabChange,
}: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <button
        className={`${styles.tab} ${
          activeTab === "home" ? styles.active : ""
        }`}
        onClick={() => onTabChange("home")}
      >
        🏠 Home
      </button>

      <button
        className={`${styles.tab} ${
          activeTab === "favorites" ? styles.active : ""
        }`}
        onClick={() => onTabChange("favorites")}
      >
        ⭐ Favorites
      </button>
    </nav>
  );
}