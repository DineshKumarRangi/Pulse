export interface MatchCardProps {
  league: string;
  sport: string;

  homeTeam: string;
  awayTeam: string;

  homeScore: number;
  awayScore: number;

  status: "LIVE" | "FINISHED" | "UPCOMING";

  minute?: string;
}