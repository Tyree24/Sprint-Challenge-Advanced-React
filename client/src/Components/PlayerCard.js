import React from "react";


const Playercard = ( {player} ) => {


    return (
        <>
        <div> Name:{player.name}</div>
        <div>Country:{player.country}</div>
        <div>Searches:{player.searches}</div>
        </>
    );
}

export default Playercard;