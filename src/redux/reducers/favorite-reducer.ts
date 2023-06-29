// import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/action";
// import { Card, Action } from "../types";

// const initialState: Card[] = [];


// // Reducer
// const reducer = (state = initialState, action: any) => {
//     switch (action.type) {
//       case ADD_FAVORITE:
//         return [...state, action.payload];
//       case REMOVE_FAVORITE:
//         return state.filter((card: Card) => card.id !== action.payload);
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Card {
//   id: number;
//   name: string;
//   image: string;
// }

// interface FavoritesState {
//   cards: Card[];
// }

// const initialState: FavoritesState = {
//   cards: [],
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addCard: (state, action: PayloadAction<Card>) => {
//       state.cards.push(action.payload);
//     },
//     removeCard: (state, action: PayloadAction<number>) => {
//       state.cards = state.cards.filter((card) => card.id !== action.payload);
//     },
//   },
// });

// export const { addCard, removeCard } = favoritesSlice.actions;

// export default favoritesSlice.reducer;