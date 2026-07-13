import type { ApiFixture } from "./footballTypes";
import type { Match } from "../../types/match";

export function mapFixtureToMatch(fixture: ApiFixture): Match {
  const apiStatus = fixture.fixture.status.short;

  let status: Match["status"];

  switch (apiStatus) {
    case "1H":
    case "2H":
    case "HT":
    case "ET":
    case "BT":
    case "LIVE":
      status = "LIVE";
      break;

    case "FT":
    case "AET":
    case "PEN":
      status = "FINISHED";
      break;

    default:
      status = "UPCOMING";
  }

  return {
    id: fixture.fixture.id.toString(),

    fixtureId: fixture.fixture.id,

    sport: "⚽",

    league: fixture.league.name,
    leagueLogo: fixture.league.logo,

    homeTeam: fixture.teams.home.name,
    homeLogo: fixture.teams.home.logo,

    awayTeam: fixture.teams.away.name,
    awayLogo: fixture.teams.away.logo,

    homeScore: fixture.goals.home,
    awayScore: fixture.goals.away,

    status,

    minute:
      fixture.fixture.status.elapsed != null
        ? `${fixture.fixture.status.elapsed}'`
        : undefined,

    kickoff: fixture.fixture.date,
  };
}