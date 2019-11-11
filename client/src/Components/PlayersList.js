import React from "react";
import PlayerCard from './PlayerCard';

const PlayerList = ({ players }) => {

    if(players.length) {

    return (

        <div> 

{players.map(player => {
                return <PlayerCard player={player} key={player.id} />
                })}
             </div>
    );
} else {
    return(
        <div>Getting Players...</div>
    )
}
}

export default PlayerList;