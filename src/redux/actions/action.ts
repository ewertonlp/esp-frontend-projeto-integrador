import api from "../../sevices/apiURL";
import { Dispatch } from "redux";
import { State } from "../types";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Character {
  
}

interface CharacterAction {
  type: string;
  payload: State[];
}

export const getCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get('/character');
    dispatch({ type: 'GETALL', payload: response.data });
  };
};

export const getPages = (page: number) => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get(`/character/?page=${page}`);
    console.log(response.data);
    dispatch({ type: 'GET_PAGE', payload: response.data });
  };
};

export const getCharacterById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await api.get(`./character/${id}`);
      const character = response.data;

      dispatch({ type: 'GET_CHARACTER_ID', payload: character });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCharacter = (filter: string) => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get(`/character/?name=${filter}`);
    console.log(response.data);
    dispatch({ type: 'SET_FILTER', payload: response.data });
  };
};


