import { useDispatch } from 'react-redux';
import { CardProps } from './types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function FavoriteCard({ id, img, name, isFavorite }: CardProps) {
  
  const dispatch = useDispatch();

  function navDetails(id) {
    return `/detalhes/${id}`;
  }

  return (
    <div className="bg-slate-100 rounded-lg overflow-hidden mb-12 hover:shadow-xl hover:shadow-green-400 hover:scale-105 duration-300 ease-in-out">
      <Link to={navDetails(id)}>
        <img
          src={img}
          alt={name}
          className="w-full object-cover cursor-pointer"
        />
      </Link>
      <div className="flex items-center justify-between py-6 px-4 text-lg">
        <h3 className=" font-semibold text-lg text-slate-800">{name}</h3>
        <button
          onClick={() => {
            !isFavorite
              ? dispatch({ type: 'ADD_FAVORITE', payload: { id, img, name } })
              : dispatch({
                  type: 'REMOVE_FAVORITE',
                  payload: { id, img, name },
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
  );
}
