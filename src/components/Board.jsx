import React from "react";
import Subboard from './Subboard.jsx'

const Board = () => {

    return (
        <div className="Board">
            <Subboard image='https://shorturl.at/Dcckx' 
            gamename='at ULM' sport="Men's Football" date="4pm, Oct 12, 2024" links="https://southernmiss.com/sports/football" />

            <Subboard image='https://shorturl.at/vLjfA' 
            gamename='at Arkansas State' sport="Women's Soccer" date="1pm, Oct 13, 2024" links="https://southernmiss.com/sports/womens-soccer" />
        </div>
         
    )
}

export default Board;