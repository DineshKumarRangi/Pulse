import Header from "../../components/layout/Header";
import LeagueSection from "../../components/league/LeagueSection";

import { useMatchStore } from "../../store";

import styles from "./Home.module.css";

export default function Home() {

    const matches = useMatchStore((state) => state.matches);
    console.log(matches);

  const groupedMatches = matches.reduce((acc, match) => {

    if (!acc[match.league]) {
      acc[match.league] = [];
    }

    acc[match.league].push(match);

    return acc;

  }, {} as Record<string, typeof matches>);

  return (

    <div className={styles.container}>

      <Header />

      {Object.entries(groupedMatches).map(([league, matches]) => (

        <LeagueSection
          key={league}
          league={league}
          matches={matches}
        />

      ))}
      

    </div>

  );
}