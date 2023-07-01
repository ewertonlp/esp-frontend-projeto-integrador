import api from '../../sevices/apiURL';
import { Dispatch } from 'redux';
import { State } from '../types';


export interface CharacterAction {
  type: string;
  payload: State[];
}

export const getCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get('/character/');
   
    dispatch({ type: 'GETALL', payload: response.data });
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
    dispatch({ type: "SET_FILTER", payload: response.data });
  }
}

export const getPages = (page: number) => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get(`/character/?page=${page}`);
    dispatch({ type: "GET_PAGES", payload: response.data.info });
  };
};




// export const setPagination = (state: State ) => {
//   return {
//     type: 'SET_PAGINATION',
//     payload: state.info,
//   };
// };

// export const getPagination = (page: number) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await api.get(`character/?page=${page}`);
//       const characters = response.data.results;
//       const totalPages = response.data.results.info; 
//       console.log(response.data);
// // Adicione essa linha para obter o número total de página
      
//       // Dispare uma ação para atualizar o estado com os personagens e o número total de páginas
//       dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: { characters, totalPages } });
//     } catch (error: any) {
//       // Dispare uma ação para lidar com erros, se necessário
//       dispatch({ type: 'FETCH_CHARACTERS_ERROR', payload: error.message });
//     }
//   };
// };

