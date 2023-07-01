export type State = {
  character: {
    id: number;
    name: string;
    image: string;
    episode: string[];
    info?: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }[];
    filter: string;
  }[];
  page: number;
  favorites: {
    id: number;
    name: string;
    image: string;
  }[];
  filter: string;
  loading: boolean;
}

export type Action = { 
  type: string; 
  payload?: any;
};









