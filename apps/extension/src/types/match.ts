
export interface Match {
  id: string;

  sport: string;
  league: string;

  homeTeam: string;
  awayTeam: string;

  homeScore: number;
  awayScore: number;

  status: "LIVE" | "FINISHED" | "UPCOMING";

  minute?: string;
}