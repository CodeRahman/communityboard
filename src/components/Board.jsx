import React from "react";
import Subboard from './Subboard.jsx'

const Board = () => {

    return (
        <div className="Board">
            

            <Subboard image='./images/footballulm.webp' 
            gamename='vs ULM' sport="Men's Football" date="TBA, Oct 12, 2024" links="https://southernmiss.com/sports/football" />
        </div>
         
    )
}

export default Board;