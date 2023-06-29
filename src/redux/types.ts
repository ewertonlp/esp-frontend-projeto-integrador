export type State = {
  character: {
    id: number;
    name: string;
    image: string;
    episode: string[];
  }[];
  favorites: {
    id: number;
    name: string;
    image: string;
  }[];
  loading: boolean;
}

export type Action = { 
  type: string; 
  payload?: any;
};







