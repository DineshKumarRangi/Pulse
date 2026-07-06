import { create } from "zustand";

interface FavoriteState {
  favorites: string[];

  toggleFavorite: (matchId: string) => void;

  isFavorite: (matchId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({

  favorites: [],

  toggleFavorite: (matchId) => {

    const favorites = get().favorites;

    if (favorites.includes(matchId)) {

      set({
        favorites: favorites.filter(id => id !== matchId),
      });

    } else {

      set({
        favorites: [...favorites, matchId],
      });

    }

  },

  isFavorite: (matchId) =>
    get().favorites.includes(matchId),

}));