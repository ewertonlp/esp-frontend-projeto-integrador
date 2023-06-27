interface Cpages {
  CharacterPages: any[];
}

const initialStatePages = {
  CharacterPages: [],
};

export function pages(state: Cpages = initialStatePages, action: any): Cpages {
  switch (action.type) {
    case "GET_PAGES": {
      return {
        ...state,
        CharacterPages: action.payload.page,
      };
    }

    default:
      return state;
  }
}
