interface CharacterState {
  character: any[];
}

const initialState: CharacterState = {
  character: [],
};

export function characterReducer(state: CharacterState = initialState, action: any): CharacterState {
  switch (action.type) {
    case 'GETALL': {
      return {
        ...state,
        character: action.payload,
      };
    }
    default:
      return state;
  }
}