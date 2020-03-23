import React from 'react';
import PlayerModel from '../../Models/player';
import footballPlayer from '../../Assets/soccer-player.png';

import './Player.scss';

type PlayerProps = {
    onClick: (id: string, homeTeam: boolean, teamName: string) => void,
    player: PlayerModel,
    homeTeam: boolean,
    teamName: string
}

const Player = ({ onClick,  player, homeTeam, teamName }: PlayerProps) => {
    return(
        <button className="player" onClick={() => onClick(player.playerId, homeTeam, teamName)}>
            <img src={footballPlayer} alt="player icon"/>
            <h2>{player.position}</h2>
        </button>
    )
}


export default Player