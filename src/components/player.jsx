import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    currentTrack,
    isPlaying,
    playSong,
    pauseSong,
    playNext,
    playPrev,
    trackIndex,
    audioRef,
  } = useContext(PlayerContext);

  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!audio.duration) return;

      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);

      const min = Math.floor(audio.currentTime / 60);
      const sec = Math.floor(audio.currentTime % 60)
        .toString()
        .padStart(2, "0");

      setCurrentTime(`${min}:${sec}`);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", playNext);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", playNext);
    };
  }, [currentTrack, playNext, audioRef]);

  // ⛔ Prevent crash when no song is selected
  if (!currentTrack) return null;

  return (
  <div className="h-[90px] bg-[#181818] border-t border-[#282828] flex justify-between items-center text-white px-4">


      {/* LEFT: Song info */}
      <div className="hidden lg:flex items-center gap-4 max-w-[300px]">
        <img className="w-14 h-14 rounded" src={currentTrack.image} alt="" />
        <div className="truncate">
          <p className="font-semibold truncate">{currentTrack.name}</p>
          <p className="text-sm text-gray-400 truncate">
            {currentTrack.desc}
          </p>
        </div>
      </div>

      {/* CENTER: Controls */}
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex items-center gap-6">
          <img className="w-4 opacity-70 cursor-pointer" src={assets.shuffle_icon} alt="" />

          <img
            className="w-5 cursor-pointer"
            src={assets.prev_icon}
            onClick={playPrev}
            alt=""
          />

          <img
            className="w-10 cursor-pointer"
            src={isPlaying ? assets.pause_icon : assets.play_icon}
            onClick={() =>
              isPlaying ? pauseSong() : playSong(trackIndex)
            }
            alt=""
          />

          <img
            className="w-5 cursor-pointer"
            src={assets.next_icon}
            onClick={playNext}
            alt=""
          />

          <img className="w-4 opacity-70 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 text-xs text-gray-400 w-full">
          <span>{currentTime}</span>

          <div className="w-[60vw] max-w-[500px] h-1 bg-gray-600 rounded">
            <div
              className="h-1 bg-green-500 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* RIGHT: Volume */}
      <div className="hidden lg:flex items-center gap-2">
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-24 h-1 bg-gray-600 rounded">
          <div className="w-[60%] h-1 bg-green-500 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Player;
