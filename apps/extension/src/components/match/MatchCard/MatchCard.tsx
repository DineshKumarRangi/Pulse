import styles from "./MatchCard.module.css";
import type { MatchCardProps } from "./MatchCard.types";
import Badge from "../../ui/Badge";
import { useFavoriteStore } from "../../../store";

export default function MatchCard({
  id,
  league,
  sport,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  minute,
}: MatchCardProps) {
  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  const isFavorite = useFavoriteStore(
    (state) => state.isFavorite(id)
  );

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>
          {sport}
        </span>

        <Badge text={status} />
      </div>

      <div className={styles.teamRow}>
        <span>{homeTeam}</span>
        <strong>{homeScore}</strong>
      </div>

      <div className={styles.teamRow}>
        <span>{awayTeam}</span>
        <strong>{awayScore}</strong>
      </div>

      {minute && (
        <div className={styles.minute}>
          {minute}
        </div>
      )}

      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          onClick={() => toggleFavorite(id)}
        >
          {isFavorite ? "⭐" : "☆"}
        </button>

        <button
          className={styles.actionButton}
        >
          🔔
        </button>
      </div>
    </div>
  );
}