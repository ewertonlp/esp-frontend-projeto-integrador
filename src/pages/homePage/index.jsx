import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getCharacters, getPages } from '../../redux/actions/action';
import CharacterCard from '../../components/character/character-card/';
import Header from '../../components/layouts/header';
import ButtonPages from '../button/index'
const HomePage = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCharacters()),
    dispatch(getPages())
  },[dispatch])

  const {character} = useSelector((state)=>state.character);

  return (
    <div className='w-full bg-slate-900'>
      <Header />
      <ul className='sm:flex-col w-11/12 mx-auto md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-8 lg:mx-auto lg:w-11/12 my-12'>
        {character.results?.map(character =>(
          <CharacterCard key={character.id} img={character.image} name={character.name}/>
        ))}
      </ul>

      <ButtonPages/>
    </div>
  )
}

export default HomePage;