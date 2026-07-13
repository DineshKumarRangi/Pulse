export interface Match {
  id: string;

  sport: string;

  league: string;
  leagueLogo?: string;

  homeTeam: string;
  homeLogo?: string;

  awayTeam: string;
  awayLogo?: string;

  homeScore: number | null;
  awayScore: number | null;

  status: "LIVE" | "FINISHED" | "UPCOMING";

  minute?: string;

  kickoff: string;

  fixtureId: number;
}