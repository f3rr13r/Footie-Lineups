import React from 'react';
import PlayerModel from '../../Models/player';
import footballPlayer from '../../Assets/soccer-player.png';

import './Player.scss';

type PlayerProps = {
    onClick: (id: string) => void,
    player: PlayerModel
}

const Player = ({ onClick,  player }: PlayerProps) => {
    return(
        <button className="player" onClick={() => onClick(player.playerId)}>
            <img src={footballPlayer} alt="player icon"/>
            <h2>{player.position}</h2>
        </button>
    )
}


export default Player