import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff12]"
    >
      <img
        src={image}
        className="rounded-lg w-[160px] h-[160px] object-cover"
        alt=""
      />
      <p className="font-bold mt-2">{name}</p>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;

