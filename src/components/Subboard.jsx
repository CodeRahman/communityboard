import React from "react";


const Subboard = (props) => {
    return (
        <div className="Subboard">
            <img src={props.image} className="displayimg" alt={props.gamename}/>
            <h3>{props.gamename}</h3>
            <h4>{props.sport}</h4>
            <h4>{props.date}</h4>
            <a href={props.link} target="_blank"><button className="infobutton">View Info</button></a>
        </div>
    )
}
export default Subboard;