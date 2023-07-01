import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { State } from "../../redux/types";
import { CardProps } from './types';


type currentPage = string;
type prevPageUrl = string;
type nextPageUrl = string;
type pages = number;


const ButtonPages = () => {
    // const dispatch = useDispatch();
    // const { info } = useSelector<RootState, State>(store => store.character);

  const [characters, setCharacters] = useState([])
  const [prevPageUrl, setPrevPageUrl] = useState<prevPageUrl>("");
  const [nextPageUrl, setNextPageUrl] = useState<nextPageUrl>("");
  const [pages, setPages] = useState<pages>(0);
  const [currentPage, setCurrentPage] = useState<currentPage>(
    'https://rickandmortyapi.com/api/character'
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(currentPage);
        const data = await response.json();

        if (response.ok) {
          setNextPageUrl(data.info.next);
          setPrevPageUrl(data.info.prev);
          setPages(data.info.pages);
          setCharacters(data.results);
        } else {
          throw new Error('Erro ao obter os dados da API');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  function nextPage() {
    setCurrentPage(nextPageUrl);
    console.log(nextPageUrl);
  }

  function prevPage() {
    setCurrentPage(prevPageUrl);
    console.log(prevPageUrl);
  }

  function goToPage(num: number) {
    setCurrentPage(`https://rickandmortyapi.com/api/character?page=${num}`);
  }

  // const charList = characters.map(char => <ul key={char.id} name={char.name} img={char.image} ></ul>)

    const pageButtons = [];
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button key={i} onClick={()=> goToPage(i)} className='hover:scale-150 duration-200'>{i}</button>)
    }
  
  

  return (
    <>
    <div className="paginacao w-full mx-auto py-4 flex justify-between items-center text-green500">
        {prevPage && (<button onClick={()=>prevPage()} className='text-lg border border-green-500 px-3 rounded-full hover:bg-green600 hover:text-white duration-200 ease-out'>Anterior</button>)}
        {pageButtons}
        {nextPage && (<button onClick={()=>nextPage()} className='text-lg border border-green-500 px-3 rounded-full hover:bg-green600 hover:text-white duration-200 ease-out'>Próximo</button>)}
      <div>
        {characters.map(char => <ul key={char.id} name={char.name} img={char.image} ></ul>)}
      </div>
      {/* <button
        className="ml-8 px-4 bg-green500 py-2 rounded-xl text-white font-medium hover:scale-110 duration-200 ease-out"
        onClick={() => dispatch({ type: "PREVIOUS_PAGE", payload:  info.prev })}
      >
        Anterior
      </button>
      <button
        onClick={() => dispatch({ type: "NEXT-PAGE", payload: info.next  })}
        className="ml-8 px-4 bg-green500 py-2 rounded-xl text-white font-medium hover:scale-110 duration-200 ease-out"
      >
        Próximo
      </button> */}
    </div>
    {}
    </>
  );
};

export default ButtonPages;


// import { useDispatch, useSelector } from "react-redux";
// import ReactPaginate from "react-paginate";
// import { RootState } from "../../redux/store";
// import { State } from "../../redux/types";
// import { getPagination } from "../../redux/actions/action";
// import { useEffect, useState } from "react";


// const Pagination = () => {
//     const dispatch = useDispatch();
//     const {pages} = useSelector<RootState, State>(store => store.character);
//     const totalPages = useSelector<RootState>(store => store.totalPages)

//     const handlePageChange = (selectedPage: { selected: number}) => {
//         const page = selectedPage.selected +1;
//         dispatch(getPagination(page));
//     }

//     useEffect(()=> {
//         dispatch(getPagination(1));
//     }, [dispatch])

 
// }

// export default Pagination;