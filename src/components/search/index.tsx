type CardProps = {
filter: string,
 handleFilterChange: React.ChangeEventHandler<HTMLInputElement>,
 handleClearFilter: () => void;
}


export default function Search({ filter, handleFilterChange, handleClearFilter }: CardProps) {
  const searchBtn = (event: any) => {
    event.preventDefault();
  };

  return (
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
        onClick={searchBtn}
        className="ml-6 px-4 bg-green500 py-2 rounded-full text-white font-medium hover:scale-110 duration-200 ease-out"
      >
        Enviar
      </button>
      <button
        type="submit"
        onClick={handleClearFilter}
        className="ml-6 px-4 bg-green500 py-2 rounded-full text-white font-medium hover:scale-110 duration-200 ease-out"
      >
        Limpar
      </button>
    </div>
  );
}
