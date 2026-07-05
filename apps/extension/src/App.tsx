import { MatchCard } from "./components";

function App() {
  return (
    <MatchCard
      sport="⚽"
      league="Premier League"
      homeTeam="Liverpool"
      awayTeam="Arsenal"
      homeScore={2}
      awayScore={1}
      status="LIVE"
      minute="67'"
    />
  );
}

export default App;