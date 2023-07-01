import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPages } from "../../redux/actions/action.ts";
import CharacterCard from "../../components/character/character-card/index.tsx";
import Header from "../../components/layouts/header.tsx";
import ButtonPages from "../button/index";
import { RootState } from "../../redux/store.ts";
import { State } from "../../redux/types.ts";
import { setFilter } from "../../redux/actions/filter-action.ts";
import api from "../../sevices/apiURL.ts";

interface Character {
  id: number;
  name: string;
  image: string;
  episode: string[];
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }[];
  // page: number;
  search: string;
}

const HomePage = () => {
  const [characterFilter, setCharacterFilter] = useState<Character[]>([]);
  const { filter } = useSelector<RootState, State>((store) => store.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPages());
  // }, [dispatch]);

  // const { page } = useSelector<RootState, State>((store) => store.character);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/character/?name=${filter}`);
      setCharacterFilter(result.data.results);
    };
    fetchData();
  }, [filter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  const handleClearFilter = () => {
    dispatch(setFilter(""));
  };

  return (
    <div className="w-full bg-slate-900">
      <Header />
      <div className="w-11/12 mx-auto">
        <div className="my-16 flex justify-end items-center">
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            className="w-80 py-2 px-4 border border-green500 bg-background text-white rounded-full placeholder:text-gray-300 outline-none"
            placeholder="Morty..."
          />

          <button
            type="submit"
            onClick={handleClearFilter}
            className="ml-6 px-4 bg-green500 py-2 rounded-full text-white font-medium hover:scale-110 duration-200 ease-out"
          >
            Limpar
          </button>
        </div>
      </div>
      <div className="sm:flex-col  mx-auto md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-8 lg:mx-auto my-12">
        {characterFilter?.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            img={character.image}
            name={character.name}
            // isFavorite={isFavorite(character.id)}
          />
        ))}
      </div>
      {/* <ButtonPages /> */}
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
    </div>
  );
};

export default HomePage;
