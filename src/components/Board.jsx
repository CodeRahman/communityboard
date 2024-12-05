import React, { useState, useEffect } from "react";
import Subboard from './Subboard.jsx';
import { supabase } from '../client';
import moment from 'moment-timezone';

const Board = (props) => {
    const [scgames, setGames] = useState([]);

    const fetchGames = async () => {
        const { data, error } = await supabase
            .from('SouthernMissGames')
            .select()
            .order('delete_time', { ascending: true });

        if (error) {
            console.error("Error fetching games:", error);
            return;
        }

        
        const currentDate = moment().tz("America/Chicago").startOf('day'); 

        

        
        const filteredGames = data.filter((game) => {
            const deleteTime = moment(game.delete_time).tz("America/Chicago").startOf('day'); 
            return deleteTime.isSameOrAfter(currentDate); 
        });

        setGames(filteredGames);
    };

    useEffect(() => {
        fetchGames();
    }, [props]);

    return (
        <div className="Board">
            {
                scgames && scgames.length > 0 ? (
                    scgames.map((game, index) => (
                        <Subboard
                            key={index}
                            image={game.image}
                            gamename={game.gamename}
                            sport={game.sport}
                            date={game.date}
                            link={game.link}
                        />
                    ))
                ) : (
                    <p>No games found</p>
                )
            }
        </div>
    );
};

export default Board;
