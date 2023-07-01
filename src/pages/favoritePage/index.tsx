import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/layouts/header';
import CharacterCard from '../../components/character/character-card';
import { RootState } from '../../redux/store';
import { State } from '../../redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const FavoritePage = ({id, img, name, isFavorite}) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector<RootState, State>(
    (store) => store.character
  );

  useEffect(() => {
    dispatch({ type: 'GET_FAVORITES' });
  }, [dispatch]);

  function navDetails(id:number) {
    return `/detalhes/${id}`;
  }

  function isFavorite(idCharacter: number) {
    return !!favorites.find((favorite) => favorite.id === idCharacter);
  }

  return (
    <div className="bg-background h-screen text-white">
      <Header />
      <div>
        <h2>Favoritos</h2>
        <div className="flex justify-between mx-auto w-11/12">
          {favorites?.map((favorite) => (
            <div key={id} className="bg-slate-100  rounded-lg overflow-hidden mb-12 hover:shadow-xl hover:shadow-green-400 hover:scale-105 duration-300 ease-in-out">
              <Link to={navDetails(favorite.id)}>
                <img
                  src={favorite.img}
                  alt={favorite.name}
                  className="w-full object-cover cursor-pointer"
                />
              </Link>
              <div className="flex items-center justify-between py-6 px-4 text-lg">
                <h3 className=" font-semibold text-lg text-slate-800">
                  {favorite.name}
                </h3>
                <button
             onClick={() => {
               !isFavorite
                 ? dispatch({ type: 'ADD_FAVORITE', payload:  id, img, name  })
                 : dispatch({
                     type: 'REMOVE_FAVORITE',
                     payload:  id, img, name ,
                   });
             }}
           >
             {isFavorite ? (
               <FontAwesomeIcon
                 icon={faStar}
                 className="cursor-pointer text-yellow-400"
               />
             ) : (
               <FontAwesomeIcon
                 icon={faStar}
                 className="cursor-pointer text-slate-800"
               />
             )}
           </button>
              </div>
            </div>
            // <CharacterCard key={favorite.id} id={favorite.id} img={favorite.image} name={favorite.name} isFavorite={isFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
