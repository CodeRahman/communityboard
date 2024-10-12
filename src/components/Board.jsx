import React from "react";
import Subboard from './Subboard.jsx'


const Board = ({games}) => {

    

    return (
        <div className="Board">
            
            {games.map((game, index) => (
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