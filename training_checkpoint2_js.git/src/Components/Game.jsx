import React from "react";
import axios from 'axios';
import GameProps from "./GameProps";

const gameRandom = {
    "id": 13536,
    "slug": "portal",
    "name": "Portal",
    "released": "2007-10-09",
    "background_image": "https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg",
    "rating": 4.49,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "genres": [],
    "clip": {},
    "short_screenshots": []  
}

const ButtonNewGame =() => {
    const [game, setGame] =React.useState(gameRandom);

    function getGameRandomApi (){
        axios
        .get ("https://apis.wilders.dev/wild-games/games")
        .then((response) => response.data)
        .then((data) => {
            setGame(data.game[0]);
       
    })};
  
       return (
      <div className="divNewGame">
      <GameProps game={game}/>
      <button className="buttonNewGame" type="button" onClick={getGameRandomApi}>New One</button>
      </div>
       );
    }
    export default ButtonNewGame;
    

