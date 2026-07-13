import { create } from "zustand";

import type { Match } from "../types/match";
import { getTodayFixtures } from "../services/api/sportsApi";
import { mapFixtureToMatch } from "../services/api/matchMapper";

interface MatchState {
  matches: Match[];

  setMatches: (matches: Match[]) => void;

  addMatch: (match: Match) => void;

  loadMatches: () => Promise<void>;
}

export const useMatchStore = create<MatchState>((set) => ({
  matches: [],

  setMatches: (matches) => set({ matches }),

  addMatch: (match) =>
    set((state) => {
      const exists = state.matches.some((m) => m.id === match.id);

      if (exists) {
        return state;
      }

      return {
        matches: [...state.matches, match],
      };
    }),

  loadMatches: async () => {
    try {
      const data = await getTodayFixtures();

      const matches = data.response.map(mapFixtureToMatch);

      set({ matches });
    } catch (error) {
      console.error("Failed to load matches:", error);
    }
  },
}));