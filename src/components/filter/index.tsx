

export default function Filter() {
  return (
    <div className="my-16 flex justify-end items-center">
      <input type="text" className="w-80 py-2 px-3 border border-green500 bg-background text-white rounded-xl placeholder:text-gray-300 outline-none" placeholder="Morty..." />
      <button type="submit" className="ml-8 px-4 bg-green500 py-2 rounded-xl text-white font-medium hover:scale-110 duration-200 ease-out">Enviar</button>
    </div>
  )
}
