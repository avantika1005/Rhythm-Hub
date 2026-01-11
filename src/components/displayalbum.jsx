import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColorThief from "colorthief";

import Navbar from "./navbar";
import { albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData[id];

  const { playSong } = useContext(PlayerContext);

  const [bgColor, setBgColor] = useState("rgb(30, 58, 95)");

  /* ❌ Safety check (prevents crash) */
  if (!album) {
    return (
      <div className="text-white p-10">
        Album not found
      </div>
    );
  }

  /* 🎨 Extract dominant color from album image */
  useEffect(() => {
    if (!album?.image) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = album.image;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const [r, g, b] = colorThief.getColor(img);
        setBgColor(`rgb(${r}, ${g}, ${b})`);
      } catch (error) {
        console.error("Color extraction failed", error);
      }
    };
  }, [album]);

  return (
    <div className="w-full h-full text-white overflow-auto">

      {/* 🎧 Header with gradient */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${bgColor}, #121212)`,
        }}
        className="px-6 pt-6 pb-10 transition-all duration-700"
      >
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-md">
          <Navbar />
        </div>

        {/* Album Info */}
        <div className="flex items-end gap-6 mt-10">
          <img
            src={album.image}
            alt={album.name}
            className="w-[180px] h-[180px] rounded shadow-lg object-cover"
          />

          <div>
            <p className="uppercase text-sm font-semibold">Playlist</p>
            <h1 className="text-6xl font-bold mt-2">{album.name}</h1>

            <p className="text-slate-300 mt-4 max-w-2xl">
              {album.desc}
            </p>

            <p className="text-slate-400 text-sm mt-3">
              <span className="text-white font-medium">RhythmHub</span> •
              1,323,154 likes • 50 songs, about 2 hr 30 min
            </p>
          </div>
        </div>
      </div>

      {/* 🎵 Songs Section */}
      <div className="px-6 mt-8">

        {/* Table Header */}
        <div className="grid grid-cols-12 text-slate-400 text-sm border-b border-[#ffffff1a] pb-3">
          <p className="col-span-1">#</p>
          <p className="col-span-5">Title</p>
          <p className="col-span-4">Album</p>
          <p className="col-span-2 text-right">⏱</p>
        </div>

        {/* Songs List */}
        {songsData.map((song, index) => (
          <div
            key={song.id}
            onClick={() => playSong(index)}
            className="grid grid-cols-12 items-center py-3 text-sm rounded-md
                       hover:bg-[#ffffff12] cursor-pointer"
          >
            <p className="col-span-1 text-slate-400">
              {index + 1}
            </p>

            <div className="col-span-5 flex items-center gap-4">
              <img
                src={song.image}
                alt={song.name}
                className="w-10 h-10 rounded object-cover"
              />
              <div>
                <p className="text-white">{song.name}</p>
                <p className="text-slate-400 text-xs">RhythmHub</p>
              </div>
            </div>

            <p className="col-span-4 text-slate-400">
              {album.name}
            </p>

            <p className="col-span-2 text-right text-slate-400">
              {song.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;
