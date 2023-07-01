import { Action, State } from '../types';

export interface FilterState {
  filter: string;
}

const initialState: State = {
  character: [],
  favorites: [],
  info: [],
  loading: true,
  filter: "",
};

function saveStorageCharacter(favorites: any) {
  localStorage.setItem("favorites", favorites);
}

function removeStorageCharacter() {
  localStorage.removeItem('favorites');
}

function getStorageCharacter() {
  return localStorage.getItem('favorites');
}

export function characterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'GETALL': {
      return { ...state, character: action.payload, loading: false };
    }
    case 'GET_CHARACTER_ID': {
      return { ...state, character: action.payload };
    }
    case 'ADD_FAVORITE': {
      const findCharacter = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );

      if (!findCharacter) {
        saveStorageCharacter(
          JSON.stringify([...state.favorites, action.payload])
        );
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

      // Retorne o estado anterior caso o personagem já seja favorito
      return state;
    }
    case 'GET_FAVORITE': {
      const responseStorage = getStorageCharacter();

      if (responseStorage) {
        const favorites = JSON.parse(responseStorage);
        return {
          ...state,
          favorites: [...favorites],
        };
      }

      // Retorne o estado anterior caso não haja resposta de storage
      return state;
    }
    case 'REMOVE_FAVORITE': {
      const characterFavorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      removeStorageCharacter(); // Removido do bloco da função filter()

      return { ...state, favorites: characterFavorites };
    }

    // Filtro dos personagens
    case 'SET_FILTER': {
      return { ...state, filter: action.payload };
    }
    // Vai para a próxima página
    case 'NEXT_PAGE': {
      return {
        ...state,
        page: state.page + 1,
        loading: false,
      };
    }
    // Volta à página anterior
    case 'PREVIOUS_PAGE': {
      return {
        ...state,
        page: state.page - 1,
      };
    }
    default:
      return state;
  }
}
