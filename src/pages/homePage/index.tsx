import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/actions/action';
import { RootState } from '../../redux/store.ts';
import { State } from '../../redux/types';
import CharacterCard from '../../components/character/character-card';
import Header from '../../components/layouts/header';
import Filter from '../../components/filter/index.tsx';

const HomePage = () => {
  const dispatch = useDispatch();

  const { character, favorites, loading } = useSelector<RootState, State>(
    (store) => store.character
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    
    dispatch({ type: 'GET_FAVORITE' });
  }, [dispatch]);

  function cardsLoading() {
    if (loading) {
      return (
        <h4 className="pt-10 pl-10 text-white font-medium text-lg">
          Carregando os personagens...
        </h4>
      );
    }
  }

  function isFavorite(idCharacter: number) {
    return favorites.find((favorite) => favorite.id === idCharacter);

  }

  return (
    <div className="w-full bg-slate-900">
      <Header />

      <div className="w-11/12 mx-auto">
        <Filter />
        {cardsLoading()}
        <div className="sm:flex-col  mx-auto md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-8 lg:mx-auto my-12">
          {character.results?.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              img={character.image}
              name={character.name}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
