import MatchCard from "../../match/MatchCard";
import type { Match } from "../../../types/match";

import styles from "./LeagueSection.module.css";

interface Props{

    league:string;

    matches:Match[];

}

export default function LeagueSection({

league,

matches

}:Props){

    return(

        <section className={styles.section}>

            <h2 className={styles.title}>

                {league}

            </h2>

            {

                matches.map(match=>

                    <MatchCard

                    key={match.id}

                    {...match}

                    />

                )

            }

        </section>

    )

}