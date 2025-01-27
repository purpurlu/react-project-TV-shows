export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    rating: { average: number };
    runtime: number;
    image: {
      medium: string;
      original: string;
    } | any;
    summary: any;
    _links: { self: { href: string } };
  }