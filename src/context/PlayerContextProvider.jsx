import { PlayerContext } from "./PlayerContext";

const PlayerContextProvider = ({ children }) => {

  const playSong = (id) => {
    console.log("Playing song with id:", id);
  };

  return (
    <PlayerContext.Provider value={{ playSong }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
