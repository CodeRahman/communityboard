import React from "react";
import Subboard from './Subboard.jsx'
import gamesData from './games.json'; // Import the games.json file

const Board = () => {

    return (
        <div className="Board">
            {gamesData.map((game, index) => (
                <Subboard
                    key={index}
                    image={game.image}
                    gamename={game.gamename}
                    sport={game.sport}
                    date={game.date}
                    links={game.links}
                />
            ))}
        </div>
         
    )
}

export default Board;