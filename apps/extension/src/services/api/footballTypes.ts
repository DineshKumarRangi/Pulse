export interface ApiFootballResponse<T> {
  get: string;
  parameters: Record<string, string>;
  errors: unknown[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T[];
}

export interface ApiFixture {
  fixture: {
    id: number;
    date: string;
    timestamp: number;
    status: {
      long: string;
      short: string;
      elapsed: number | null;
      extra: number | null;
    };
  };

  league: {
    id: number;
    name: string;
    logo: string;
    country: string;
    round: string;
    season: number;
  };

  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };

    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };

  goals: {
    home: number | null;
    away: number | null;
  };
}