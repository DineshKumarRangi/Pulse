import styles from "./Badge.module.css";

type BadgeVariant = "live" | "finished" | "upcoming";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

export default function Badge({
  text,
  variant = "live",
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {text}
    </span>
  );
}