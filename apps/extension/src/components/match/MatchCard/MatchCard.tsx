import styles from "./MatchCard.module.css";
import type { MatchCardProps } from "./MatchCard.types";
import Badge from "../../ui/Badge";

export default function MatchCard({
  league,
  sport,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  minute,
}: MatchCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>
          {sport} {league}
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
        <button>⭐</button>
        <button>🔔</button>
      </div>
    </div>
  );
}