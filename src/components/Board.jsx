import React from "react";

const Board = (props) => {

    return (
        <div className="Board">
            <img src={props.image} className="displayimg"/>
            <h3>{props.gamename}</h3>
            <h4>{props.sport}</h4>
            <h4>{props.date}</h4>
            <a href={props.links} target="_blank"><button className="infobutton">View Info</button></a>
        </div>
         
    )
}

export default Board;