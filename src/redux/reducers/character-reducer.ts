import { Action, State } from '../types';

const initialState: State = {
  character: [],
  favorites: [],
  loading: true,
};

function saveStorageCharacter(character: any) {
  // const savedSorage = JSON.parse(getStorageCharacter());
  console.log(character);
  // savedSorage.push(character);
  // localStorage.setItem('character', JSON.stringify(savedSorage));
}

function removeStorageCharacter() {
  localStorage.removeItem('character');
}

function getStorageCharacter() {
  return localStorage.getItem('character');
}

export function characterReducer(state = initialState, action: Action) {
  if (action.type === 'GETALL') {
    return { ...state, character: action.payload, loading: false };
  }

  if (action.type === 'ADD_FAVORITE') {
    const findCharacter = state.favorites.find(
      (favorite) => favorite.id === action.payload.id
      // saveStorageCharacter(action.payload.id)
    );
    alert(findCharacter);
    if (!findCharacter) {
      saveStorageCharacter(action.payload);
      return { ...state, favorites: [...state.favorites, action.payload] };
    }
  }

  if (action.type === 'GET_FAVORITE') {
    const response = JSON.parse(getStorageCharacter());

    return {
      ...state,
      // favorites: response,
    };
  }

  // if (action.type === 'GET_FAVORITE_STORAGE') {
  //   const response = localStorage.getItem('character');

  //   if (response) {
  //     const character = JSON.parse(response);
  //     console.log(character);
  //     return {
  //       ...state,
  //       // favorites: character,
  //     };
  //   }
  // }

  if (action.type === 'REMOVE_FAVORITE') {
    const characterFavorites = state.favorites.filter(
      (favorite) => favorite.id !== action.payload.id,
      removeStorageCharacter()
    );
    return { ...state, favorites: characterFavorites };
  }
  return state;
}
