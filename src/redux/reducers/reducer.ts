const State = {
    todo: []
}

export function rickReducer(state = State, action) {
    switch (action.type) {
        case "PAGES" :{
            ...state,
            todo : action.payload
        }
        default:
            return state;
    }
}