import React from "react";

const Board = (props) => {

    return (
        <div className="Board">
            <img src={props.image}/>
            <h3>{props.truckname}</h3>
            <h4>{props.region}</h4>
            <a href={props.menulink}><button>View Menu</button></a>
        </div>
         
    )
}

export default Board;