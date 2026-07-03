import { Sport } from "./Sport";
import { Team } from "./Team";
import { Score } from "./Score";

export interface Match {

  id: string;

  sport: Sport;

  tournament: string;

  homeTeam: Team;

  awayTeam: Team;

  score: Score;

  status: string;

  startTime: string;

}