import React, { useState, useEffect } from 'react';
import axios from "axios";


function GameList(){
    const [games,setGames] = useState([]);

useEffect(() => {
    axios
        .get ("https://apis.wilders.dev/wild-games/games")
        .then((response) => response.data)
        .then((data) => setGames(data))
       
    }, [])
  
       return (
      <div className="Game">
        <ul>
          {games.map(( game) => <li key={game.id}>{game.name}</li>)}
        </ul>
      </div>
    );
  };
  export default GameList;
  