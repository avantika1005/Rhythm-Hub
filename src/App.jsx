import React from "react";
import Sidebar from "./components/sidebar";
import Display from "./components/display";
import Player from "./components/player";



const App = () => {
  return (
    <div className="h-screen bg-black flex flex-col">
      
      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Display />
      </div>

      {/* FOOTER PLAYER */}
      <Player />
    </div>
  );
};

export default App;
