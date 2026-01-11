import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ id, name, image, desc }) => {

  const { playSong } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playSong(id)}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt={name} className="rounded" />
      <p className="font-semibold mt-2">{name}</p>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
};

export default SongItem;
