import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/layouts/header';
import CharacterCard from '../../components/character/character-card';
import { RootState } from '../../redux/store';
import { State } from '../../redux/types';


const BookmarkPage = () => {
  const {favorites} = useSelector<RootState, State>(store => store.character)

  
  

  return (
    <div className='bg-background h-screen text-white'>
      <Header />
      <div>
        <h2>Favoritos</h2>
        {favorites?.map((favorite) => (
          <h3>{favorite.name}</h3>
          // <CharacterCard key={favorite.id} id={favorite.id} img={favorite.image} name={favorite.name} isFavorite={isFavorite} />
        ))}
        
      </div>
    </div>
  );
};

export default BookmarkPage;
