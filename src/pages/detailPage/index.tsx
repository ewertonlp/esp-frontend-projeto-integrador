import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from '../../redux/actions/action';
import { RootState } from "../../redux/store";
import { State } from '../../redux/types';
import Header from '../../components/layouts/header';


type CharacterParams = {
  id: string;
};

const DetailPage = () => {
  const { id } = useParams<CharacterParams>();
  const dispatch = useDispatch();

  const {character} = useSelector<RootState, State>((store) => store.character);


  useEffect(() => {
    dispatch(getCharacterById(id))
    
  }, [dispatch, id])
  

  if (!character) {
    return (
      <div>Selecione um personagem na página principal para exibir os detalhes.</div>
    )
  }


  return (
    <div className='bg-background'>
    <Header />
    <div className='bg-background mx-auto w-6/12 h-screen sm:flex md:grid md:grid-cols-2 md:gap-10 pt-16'>
      <div className=' h-2/3 border border-green500 rounded-lg p-4'>
      <h2 className='text-2xl font-semibold text-gray-200 mb-6'>{character.name}</h2>
      <img src={character.image} alt={character.name} className='w-96 rounded-lg border-2 border-green-400' />
      </div>
      <div className='text-gray-200 h-2/3 border border-green500 rounded-lg p-4'>
        <h2 className='text-xl font-semibold text-gray-200 mb-6'>Bio</h2>
        <p className='mb-4'>Personagem: {character.name}</p>
        <p>Episódios:</p>
        <ul>
          <li className='flex flex-col flex-wrap w-1/2'>{character.episode}</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default DetailPage;