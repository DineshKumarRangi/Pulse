import { create } from "zustand";

import type { Match } from "../types/match";
import { matches as mockMatches } from "../services/mock/matches";

interface MatchState {
  matches: Match[];

  setMatches: (matches: Match[]) => void;

  addMatch: (match: Match) => void;
}

export const useMatchStore = create<MatchState>((set) => ({

  matches: mockMatches,

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
}));