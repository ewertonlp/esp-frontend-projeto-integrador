import { SET_FILTER, CLEAR_FILTER, FilterActionTypes } from "../actions/filter-action";

export interface FilterState {
  filter: string;
}

const initialState: FilterState = {
  filter: "",
};

export const filterReducer = (
  state = initialState,
  action: FilterActionTypes
): FilterState => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case CLEAR_FILTER:
      return { ...state, filter: "" };
    default:
      return state;
  }
};