import React from 'react';

function GameProps ({game}) {
    return (
        <section className='NewGame'>
        <h2 className='NewGame2'>{game.strGame}</h2>
        <div className='NewGameContainers'>
          <div className='NewGameContainer1'>
            <img className='imgNewGame' src={game.strGameThumb} alt={game.idGame} />
          </div>
          <div className='NewGame2'>
            <div className='divNewGameContainer2'>
              {game.strgame1  ? <h3 className='NewGameh3'>Games :</h3> : ""}    
              <ul className='NewGameList1'>
                {game.strGamet1 ? <li>{game.strGame1}</li> : ""}
                {game.strGame2 ? <li>{game.strGame2}</li> : ""}
                {game.strGame3 ? <li>{game.strGame3}</li> : ""}
                {game.strGame4 ? <li>{game.strGame4}</li> : ""}
                {game.strGame5? <li>{game.strGame5}</li> : ""}
                {game.strGame6 ? <li>{game.strGame6}</li> : ""}
                {game.strGame7 ? <li>{game.strGame7}</li> : ""}
                </ul>
                {game.strInstructions ? <h3 className='NewGameh3' >Again</h3> : ""}
              <ul className='NewGameList2'>
              {game.strInstructions ? <li className='NewGameInstructions'>{game.strInstructions}</li> : ""} 
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}
export default GameProps;