import React from "react";
import Navbar from "./navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./albumitem";
import SongItem from "./songitem";

const DisplayHome = () => {
  console.log("Albums:", albumsData);
  console.log("Songs:", songsData);

  return (
    <div className="w-full h-full text-white px-4">
      
      {/* Navbar */}
      <Navbar />

      {/* 🎧 Featured Charts */}
      <div className="my-6">
        <h2 className="font-bold text-2xl mb-4">Featured Charts</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {albumsData?.length > 0 ? (
            albumsData.map((album) => (
              <AlbumItem
                key={album.id}
                id={album.id}
                image={album.image}
                name={album.name}
                desc={album.desc}
              />
            ))
          ) : (
            <p className="text-gray-400">No albums found</p>
          )}
        </div>
      </div>

      {/* 🎵 Today's Biggest Hits */}
      <div className="my-6">
        <h2 className="font-bold text-2xl mb-4">Today's Biggest Hits</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {songsData?.length > 0 ? (
            songsData.map((song, index) => (
              <SongItem
                key={song.id || index}
                id={index}
                name={song.name}
                image={song.image}
                desc={song.desc}
              />
            ))
          ) : (
            <p className="text-gray-400">No songs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
