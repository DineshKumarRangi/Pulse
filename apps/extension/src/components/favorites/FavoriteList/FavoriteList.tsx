import MatchCard from "../../match/MatchCard";
import { useFavoriteStore, useMatchStore } from "../../../store";
import styles from "./FavoriteList.module.css";

export default function FavoriteList() {
  const matches = useMatchStore((state) => state.matches);

  const favorites = useFavoriteStore((state) => state.favorites);

  const favoriteMatches = matches.filter((match) =>
    favorites.includes(match.id)
  );

  if (favoriteMatches.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No Favorites Yet</h2>
        <p>Tap ⭐ on any match to add it here.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Favorite Matches</h2>

      <div className={styles.list}>
        {favoriteMatches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
}