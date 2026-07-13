import { useEffect, useState } from "react";

import Navigation from "../../components/layout/Navigation";
import FavoriteList from "../../components/favorites/FavoriteList";
import Header from "../../components/layout/Header";
import LeagueSection from "../../components/league/LeagueSection";

import { useMatchStore } from "../../store";

import styles from "./Home.module.css";
import {getTodayFixtures } from "../../services/api/sportsApi";
import { mapFixtureToMatch } from "../../services/api/matchMapper";

export default function Home() {




  

    const matches = useMatchStore((state) => state.matches);
    const [activeTab, setActiveTab] = useState<"home" | "favorites">("home");
    console.log(matches);

  const groupedMatches = matches.reduce((acc, match) => {

    if (!acc[match.league]) {
      acc[match.league] = [];
    }

    acc[match.league].push(match);

    return acc;

  }, {} as Record<string, typeof matches>);


 


const loadMatches = useMatchStore((state) => state.loadMatches);

useEffect(() => {
  loadMatches();
}, [loadMatches]);

 return (
  <div className={styles.container}>
    <Header />

    <Navigation
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />

    {activeTab === "home" ? (
      Object.entries(groupedMatches).map(([league, matches]) => (
        <LeagueSection
          key={league}
          league={league}
          matches={matches}
        />
      ))
    ) : (
      <FavoriteList />
    )}


     <div>
      ...
    </div>
  </div>
);
}