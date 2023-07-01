export const SET_FILTER = "SET_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

interface ClearFilterAction {
  type: typeof CLEAR_FILTER;
}

export type FilterActionTypes = SetFilterAction | ClearFilterAction;

export const setFilter = (filter: string): FilterActionTypes => ({
  type: SET_FILTER,
  payload: filter,
});

export const clearFilter = (): FilterActionTypes => ({
  type: CLEAR_FILTER,
});