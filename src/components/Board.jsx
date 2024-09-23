import React from "react";
import Subboard from './Subboard.jsx'

const Board = () => {

    return (
        <div className="Board">
            <Subboard image='./images/soccersouthalabama.webp' 
            gamename='vs South Alabama' sport="Women's Soccer" date="6pm, Sep 26, 2024" links="https://southernmiss.com/sports/womens-soccer" />

            <Subboard image='./images/volleyulm.webp' 
            gamename='vs ULM' sport="Women's Volleyball" date="6pm, Sep 27, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
        
            <Subboard image='./images/volleyulm2.webp' 
            gamename='vs ULM' sport="Women's Volleyball" date="2pm, Sep 28, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

            <Subboard image='./images/soccertexasstate.webp' 
            gamename='vs Texax State' sport="Women's Soccer(Free)" date="1pm, Sep 29, 2024" links="https://southernmiss.com/sports/womens-soccer" />

            <Subboard image='./images/volleyarkansasstate.webp' 
            gamename='vs Arkansas State' sport="Women's Volleyball" date="6pm, Oct 3, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

            <Subboard image='./images/volleyarkansasstate2.webp' 
            gamename='vs Arkansa State' sport="Women's Volleyball" date="6pm, Oct 4, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
            
            <Subboard image='./images/footballragincajuns.webp' 
            gamename='vs Louisiana Ragin Cajuns' sport="Men's Football" date="TBA, Oct 5, 2024" links="https://southernmiss.com/sports/football" />

            <Subboard image='./images/soccercoastalcarolina.webp' 
            gamename='vs Coastal Carolina' sport="Women's Soccer(Free)" date="1pm, Oct 6, 2024" links="https://southernmiss.com/sports/womens-soccer" />

            <Subboard image='./images/soccermarshall.webp' 
            gamename='vs Marshall' sport="Women's Soccer(Free)" date="4pm, Oct 10, 2024" links="https://southernmiss.com/sports/womens-soccer" />

            <Subboard image='./images/volleyragincajuns.webp' 
            gamename='vs Louisiana Ragin Cajuns' sport="Women's Volleyball" date="6pm, 0ct 10, 2024" links="https://southernmiss.com/sports/womens-volleyball" />
            
            <Subboard image='./images/volleyragincajuns2.webp' 
            gamename='vs Louisiana Ragin Cajuns' sport="Women's Volleyball" date="6pm, 0ct 11, 2024" links="https://southernmiss.com/sports/womens-volleyball" />

            <Subboard image='./images/footballulm.webp' 
            gamename='vs ULM' sport="Men's Football" date="TBA, Oct 12, 2024" links="https://southernmiss.com/sports/football" />
        </div>
         
    )
}

export default Board;