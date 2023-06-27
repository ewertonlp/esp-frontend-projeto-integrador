interface CharacterState {
  character: any[];
  pages: number;
}

const initialState: CharacterState = {
  character: [],
  pages: 1,
};

export function characterReducer(
  state: CharacterState = initialState,
  action: any
): CharacterState {
  switch (action.type) {
    case "GETALL": {
      return {
        ...state,
        character: action.payload,
      };
    }
    //vai para a proxima pagina
    case "NEXT-PAGE": {
      return {
        ...state,
        pages: state.pages + 1
      };
    }

    //vai volta a pagina
    case "PREVIOUS_PAGE": {
      return {
        ...state,
        pages: state.pages - 1
      };
    }

    default:
      return state;
  }
}
