import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] min-w-[240px] h-screen bg-black text-white p-2 hidden lg:block">
      
      {/* Top Section */}
      <div className="bg-[#121212] rounded-lg p-4 mb-2">
        <div className="flex items-center gap-3 mb-4 cursor-pointer">
          <img src={assets.home_icon} className="w-6" />
          <p className="font-semibold">Home</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <img src={assets.search_icon} className="w-6" />
          <p className="font-semibold">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] rounded-lg p-4 h-[calc(100%-130px)] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-6" />
            <p className="font-semibold">Your Library</p>
          </div>
          <img src={assets.plus_icon} className="w-4 cursor-pointer" />
        </div>

        {/* Create Playlist */}
        <div className="bg-[#242424] p-4 rounded-lg mb-4">
          <p className="font-semibold mb-1">Create your first playlist</p>
          <p className="text-sm text-gray-400 mb-3">
            It's easy, we'll help you
          </p>
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
            Create Playlist
          </button>
        </div>

        {/* Podcast */}
        <div className="bg-[#242424] p-4 rounded-lg">
          <p className="font-semibold mb-1">
            Let's find some podcasts to follow
          </p>
          <p className="text-sm text-gray-400 mb-3">
            We'll keep you updated on new episodes
          </p>
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
