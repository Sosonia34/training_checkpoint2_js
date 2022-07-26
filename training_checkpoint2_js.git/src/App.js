import React from "react";
import './App.css';
import Header from "./Components/Header";
import GameList from "./Components/GameList";
import Game from './Components/Game';
import GameProps from './Components/GameProps';

function App() {
  return (
    <div>
      <Header/>
      <GameList/>
      <Game/>
      <GameProps/>
      
      
    </div>
  );
}
export default App;
