import { CardProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function CharacterCard({img, name}: CardProps) {
  return (
    <div className="bg-slate-100 rounded-lg overflow-hidden mb-12 hover:shadow-xl hover:shadow-green-400 hover:scale-105 duration-300 ease-in-out">
      <img src={img} alt={name} className="w-full object-cover cursor-pointer"/>
      <div className="flex items-center justify-between py-6 px-4 text-lg">
      <h3 className=" font-semibold text-lg text-slate-800">{name}</h3>
      <FontAwesomeIcon icon={faStar} className="cursor-pointer" />
      </div>
    </div>
  )
}


