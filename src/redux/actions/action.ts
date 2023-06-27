import api from "../../sevices/apiURL";
import { Dispatch } from "redux";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Character {}

interface CharacterAction {
  type: string;
  payload: Character[];
}

export const getCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const response = await api.get("/character");
    dispatch({ type: "GETALL", payload: response.data });
  };
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    const pages = 1;
    const response = await api.get(`/character/?page=${pages}`);
    dispatch({ type: "GET_PAGE", payload: response.data });
  };
};
