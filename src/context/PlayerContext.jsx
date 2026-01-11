import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (index) => {
    const song = songsData[index];
    if (!song) return;

    audioRef.current.src = song.file; // ✅ FIX IS HERE
    audioRef.current.play();

    setTrackIndex(index);
    setCurrentTrack(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playNext = () => {
    const nextIndex = (trackIndex + 1) % songsData.length;
    playSong(nextIndex);
  };

  const playPrev = () => {
    const prevIndex =
      trackIndex === 0 ? songsData.length - 1 : trackIndex - 1;
    playSong(prevIndex);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playSong,
        pauseSong,
        playNext,
        playPrev,
        trackIndex,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
