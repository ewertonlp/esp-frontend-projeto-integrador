import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { State } from "../../redux/types";

const ButtonPages = () => {
  const dispatch = useDispatch();
  const { page } = useSelector<RootState, State>((State) => State.character);

  return (
    <div className="paginacao">
      <button
        className="ml-8 px-4 bg-green500 py-2 rounded-xl text-white font-medium hover:scale-110 duration-200 ease-out"
        onClick={() => dispatch({ type: "PREVIOUS_PAGE", payload: { page } })}
      >
        Anterior
      </button>
      <button
        onClick={() => dispatch({ type: "NEXT-PAGE", payload: { page } })}
        className="ml-8 px-4 bg-green500 py-2 rounded-xl text-white font-medium hover:scale-110 duration-200 ease-out"
      >
        Próximo
      </button>
    </div>
  );
};

export default ButtonPages;
