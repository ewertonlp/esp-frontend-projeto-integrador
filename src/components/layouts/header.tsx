import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[80px] bg-background text-green500 flex justify-between items-center sm:px-10 md:px-6 lg:px-20 border-b border-green-800 z-1">
      <h1 className="text-xl font-semibold">
        <Link to="/">Rick and Morty</Link>
      </h1>

      <ul className="hidden sm:flex gap-8">
        <li className='w-28 text-center py-1 rounded-md hover:bg-green600 hover:text-white cursor-pointer duration-200 ease-out'>
          <Link to="/">Home</Link>
        </li>
        <li className='w-28 text-center py-1 rounded-md hover:bg-green600 hover:text-white cursor-pointer duration-200 ease-out'>
          <Link to="/favoritos">Favoritos</Link>
        </li> 
      </ul>

      <FontAwesomeIcon icon={faBars} 
        onClick={() => setIsOpen(!isOpen)}
        className="flex sm:hidden cursor-pointer text-2xl pr-6"
      />

      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col gap-2 absolute bg-background w-full h-1/2 mt-[538px] px-8 text-lg pt-10 z-10 sidebar border-b-2 border-green600`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;