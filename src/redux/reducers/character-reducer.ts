import { State, Action } from "../types";

const initialState: State = {
  character: [],
  favorites: [],
  loading: true,
  page: 1,
  filter: "",
};

export function characterReducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case "GETALL": {
      return {
        ...state,
        character: action.payload,
      };
    }

    case "GET_PAGE": {
      return {
        ...state,
        character: [...state.character, action.payload],
      };
    }

    //vai para a proxima pagina

    case "NEXT-PAGE": {
      return {
        ...state,
        page: state.page + 1,
      };
    }

    //vai volta a pagina
    case "PREVIOUS_PAGE": {
      return {
        ...state,
        page: state.page - 1,
      };
    }

    default:
      return state;
  }
}
