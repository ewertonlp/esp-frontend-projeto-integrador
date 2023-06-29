import api from '../../sevices/apiURL';
import { Dispatch } from 'redux';
import { State } from '../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// interface Cards {}

export interface CharacterAction {
  type: string;
  payload: State[];
}

export const getCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get('/character');
    dispatch({ type: 'GETALL', payload: response.data });
    console.log(response.data);
  };
};


// /**
//  * Funções para adicionar e remover os cards dos favoritos * 
//  */
// export const ADD_FAVORITE = 'ADD_FAVORITE';
// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// export const addFavorite = (card: State) => ({
//   type: ADD_FAVORITE,
//   payload: card,
// });

// export const removeFavorite = (id: number) => ({
//   type: REMOVE_FAVORITE,
//   payload:id,
// });



