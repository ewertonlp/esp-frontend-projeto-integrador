import { faInfo } from "@fortawesome/free-solid-svg-icons";

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
  page: number;
  loading: boolean;
};

export type Action = {
  type: string;
  payload?: any;
};
